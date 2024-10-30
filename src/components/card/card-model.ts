import { iProduct } from '../../types/data/data';
import { iCardModel } from '../../types/models/i-card-model';

export class CardModel implements iCardModel {
	private _product: iProduct;

	constructor(product: iProduct) {
		this._product = product;
	}

	get product(): iProduct {
		return this._product;
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
