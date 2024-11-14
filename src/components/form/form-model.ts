import { iProduct, iOrderData } from '../../types/data/data';
import { IProductsModel } from '../../types/models/i-products-model';
import { IFormModel } from '../../types/models/i-form-model';
import { EventEmitter } from '../base/events';

export class FormModel implements IFormModel {
	private _orderData: iOrderData;
	private _error: string;
	private readonly _events: EventEmitter;

	
	get events(): EventEmitter{
		return this._events
	}

	get orderData(): iOrderData {
		return this._orderData;

	}

	get error(): string {
		return this._error;
	}

	set error(error: string) {
		this._error = error;
	}

	input(value: string): void {
		throw new Error('Method not implemented.');
	}
	validate(value: string): string {
		throw new Error('Method not implemented.');
	}
	postOrder(formFields: iOrderData): Promise<object> {
		throw new Error('Method not implemented.');
	}
}
