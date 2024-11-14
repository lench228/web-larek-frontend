import { iProduct } from '../../types/data/data';
import { iCardModel } from '../../types/models/i-card-model';
import { EventEmitter } from '../base/events';

export class CardModel implements iCardModel {
	private _product: iProduct;
	private readonly _events: EventEmitter;

	constructor(product: iProduct, events: EventEmitter) {
		this._product = product;
		this._events = events;
	}

	get product(): iProduct {
		return this._product;
	}

	get events () : EventEmitter {
		return this._events;
	}

	getCard(url: string): Promise<object> {
		this._product = {
			id: '',
			category: '',
			description: '',
			image: '',
			price: 1,
			title: 'a',
		};
		throw new Error('Method not implemented');
	}
	buyProduct(): void {
		throw new Error('Method not implemented.');
	}
	deleteProduct(): void {
		throw new Error('Method not implemented.');
	}
}
