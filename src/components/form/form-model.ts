import { iProduct, iOrderData } from '../../types/data/data';
import { productsModel } from '../../types/models/products-model';
import { formModel } from '../../types/models/form-model';

export class FormModel implements formModel {
	private _formFields: iOrderData;
	private _error: string;

	get formFields(): iOrderData {
		return this._formFields;
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
