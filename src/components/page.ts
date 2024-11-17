import { ProductsView } from './products/products-view';
import { ProductsModel } from './products/products-model';
import { EventEmitter } from './base/events';
import { cloneTemplate } from '../utils/utils';
import { iApiProducts, iCatalogProduct, iProduct } from '../types/data/data';
import { CardView } from './card/card-view';
import { CartModel } from './cart/cart-model';
import { CardModel } from './card/card-model';

const CatalogSelectors = {
	container: document.querySelector('.gallery') as HTMLElement,
	template: cloneTemplate('#card-catalog') as HTMLElement,
};

const CardSelectors = {
	container: document.querySelector('.modal') as HTMLElement,
	template: cloneTemplate('#card-preview') as HTMLElement,
};

export class Page {
	private broker = new EventEmitter();

	constructor() {
		const productsModel = new ProductsModel(this.broker);
		const productsComponent = new ProductsView(
			CatalogSelectors.container,
			this.broker,
			CatalogSelectors.template
		);

		const cardModel = new CardModel(this.broker);
		const cardComponent = new CardView(
			CardSelectors.container,
			this.broker,
			CardSelectors.template
		);

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
	}
}
