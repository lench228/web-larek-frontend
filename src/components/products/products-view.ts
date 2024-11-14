import { iComponent } from '../../types/base/iComponent';
import { EventEmitter } from '../base/events';
import { Component } from '../base/component';
import { iApiProducts, iCatalogProduct, iProduct } from '../../types/data/data';
import { BASE_URI } from 'mini-css-extract-plugin/types/utils';
import { API_URL, CDN_URL } from '../../utils/constants';

export class ProductsView extends Component<iApiProducts> {
	private readonly _events: EventEmitter;
	private readonly _template: HTMLElement;

	constructor(
		container: HTMLElement,
		events: EventEmitter,
		template: HTMLElement
	) {
		super(container);
		this._template = template;
		console.log(template);
		this._events = events;
	}

	set items(products: iProduct[]) {
		console.log(products);
		this.container.innerHTML = '';

		products.forEach((product: iCatalogProduct) => {
			const newItem = this._template.cloneNode(true) as HTMLElement;

			this.setText(newItem.querySelector('.card__title'), product.title);
			this.setImage(
				newItem.querySelector('.card__image'),
				CDN_URL + product.image
			);
			this.setText(newItem.querySelector('.card__category'), product.category);

			this.setText(
				newItem.querySelector('.card__price'),
				product.price ? product.price + ' ' + 'синапсов' : 'Бесценно'
			);

			this.container.appendChild(newItem);
		});
	}
}
