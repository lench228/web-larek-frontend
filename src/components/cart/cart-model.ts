import { iCartProduct } from '../../types/data/data';
import { iCartModel } from '../../types/models/i-cart-model';
import { EventEmitter } from '../base/events';

export class CartModel implements iCartModel {
	_products: iCartProduct[];
	_events: EventEmitter;
	_total: number;

	get events (): EventEmitter{
		return this._events;
	}

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
