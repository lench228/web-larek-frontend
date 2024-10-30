import { iCartProduct } from '../../types/data/data';
import { iCartModel } from '../../types/models/i-cart-model';

export class CartModel implements iCartModel {
	_products: iCartProduct[];
	_total: number;

	get products(): iCartProduct[] {
		return this._products;
	}

	get total(): number {
		return this._total;
	}

	add(id: string): void {
		throw new Error('Method not implemented.');
	}
	remove(id: string): void {
		throw new Error('Method not implemented.');
	}
}
