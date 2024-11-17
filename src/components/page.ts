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

	constructor() {
		// Объявить в index.js?
		const productsModel = new ProductsModel(this.broker);
		const productsComponent = new ProductsView(
			CatalogSelectors.container,
			this.broker,
			CatalogSelectors.template
		);

		const cardModel = new CardModel(this.broker);

		const cardComponent = new CardView(
			modalContainer,
			this.broker,
			CardSelectors.template
		);

		const cartModel = new CartModel(this.broker);

		const cartComponent = new CartView(
			modalContainer,
			this.broker,
			CartSelectors.template
		);

		// Вынести в метод
		this.broker.on('products:get', () => {
			productsComponent.render(productsModel.products as Partial<iApiProducts>);
		});

		this.broker.on('card:open', (id: Record<string, string>) => {
			cardComponent.renderLoading();
			cardComponent.openModal();
			cardModel
				.getCard(id.id)
				.then((card: CardModel) => {
					cardComponent.render(card as Partial<iProduct>);
				})
				.finally(() => {
					cardComponent.stopLoading();
				});
		});

		this.broker.on('cart:open', () => {
			cartComponent.render(cartModel._products as Partial<iCartProduct>);
			cartComponent.openModal();
		});
	}
}
