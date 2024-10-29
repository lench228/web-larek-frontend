import { iProduct } from '../../types/data/data';
import { cardModel } from '../../types/models/card-model';

export class CardModel implements cardModel {
	_product: iProduct;

	get product(): iProduct {
		return this._product;
	}

	getCard(url: string): Promise<object> {
		throw new Error('Method not implemented.');
	}
	buyProduct(): void {
		throw new Error('Method not implemented.');
	}
	deleteProduct(): void {
		throw new Error('Method not implemented.');
	}
}
