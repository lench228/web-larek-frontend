import { ProductsView } from './products/products-view';
import { ProductsModel } from './products/products-model';
import { EventEmitter } from './base/events';
import { cloneTemplate } from '../utils/utils';
import {
	iApiProducts,
	iCartProduct,
	iCatalogProduct,
	iProduct,
} from '../types/data/data';
import { CardView } from './card/card-view';
import { CartModel } from './cart/cart-model';
import { CardModel } from './card/card-model';
import { CartView } from './cart/cart-view';
import { render } from 'sass';

const modalContainer = document.querySelector('.modal') as HTMLElement;

const CatalogSelectors = {
	container: document.querySelector('.gallery') as HTMLElement,
	template: cloneTemplate('#card-catalog') as HTMLElement,
};

const CardSelectors = {
	template: cloneTemplate('#card-preview') as HTMLElement,
};

const CartSelectors = {
	template: cloneTemplate('#basket') as HTMLElement,
};

export class Page {
	private broker = new EventEmitter();
	private productsModel: ProductsModel;
	private productsView: ProductsView;
	private cartModel: CartModel;
	private cartView: CartView;
	private cardModel: CardModel | null = null;
	private cardView: CardView | null = null;

	constructor() {
		this.productsModel = new ProductsModel(this.broker);
		this.productsView = new ProductsView(
			CatalogSelectors.container,
			this.broker,
			CatalogSelectors.template
		);

		this.cartModel = new CartModel(this.broker);
		this.cartView = new CartView(
			modalContainer,
			this.broker,
			CartSelectors.template
		);

		this.setupEventHandlers();
	}

	private setupEventHandlers() {
		this.broker.on('products:get', () => {
			this.productsView.render(
				this.productsModel.products as Partial<iApiProducts>
			);
		});

		this.broker.on('card:open', (id: Record<string, string>) => {
			if (!this.cardModel || !this.cardView) {
				// Инициализация модели и вью только один раз
				this.cardModel = new CardModel(this.broker);
				this.cardView = new CardView(
					modalContainer,
					this.broker,
					CardSelectors.template
				);
			}

			const cardComponent = this.cardView;
			const cardModel = this.cardModel;

			cardComponent.renderLoading();
			cardComponent.openModal();

			cardModel
				.getCard(id.id)
				.then((card: iProduct) => {
					cardComponent.setInCart(
						this.cartModel.products.some((cartCard) => cartCard.id === card.id)
					);
					cardComponent.render(card as Partial<iProduct>);
				})
				.finally(() => {
					cardComponent.stopLoading();
				});
		});

		this.broker.on('cart:open', () => {
			this.cartView.render({
				products: this.cartModel.products,
			} as Partial<iCartProduct>);

			this.cartView.update(
				this.cartModel.products.length,
				this.cartModel.total
			);

			this.cartView.openModal();
		});

		// Добавить обработчик на закрытие модалки(очистить контейнер)

		this.broker.on('cart:add', (id: Record<string, string>) => {
			///поменять на статический
			const cardModel = new CardModel(this.broker);
			cardModel.getCard(id.id).then((card: iProduct) => {
				const { title, id, price } = card;
				const adaptedCard = { title, id, price };
				this.cartModel.add(adaptedCard);
				this.cartView.update(
					this.cartModel.products.length,
					this.cartModel.total
				);
			});
		});

		this.broker.on('cart:remove', (id: Record<string, string>) => {
			this.cartModel.remove(id.id);
			if (!this.cartView.container.querySelector('.card_full')) {
				console.log(this.cartView.container.innerHTML);
				this.cartView.removeCard(id.id);
			}
			this.cartView.update(
				this.cartModel.products.length,
				this.cartModel.total
			);
		});
	}
}
