import { ProductsView } from './products/products-view';
import { ProductsModel } from './products/products-model';
import { EventEmitter } from './base/events';
import { cloneTemplate } from '../utils/utils';
import { iApiProducts, iProduct } from '../types/data/data';

const CatalogSelectors = {
	container: document.querySelector('.gallery') as HTMLElement,
	template: cloneTemplate('#card-catalog') as HTMLElement,
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

		this.broker.on('products:get', () => {
			productsComponent.render(productsModel.products as Partial<iApiProducts>);
		});
	}
}
