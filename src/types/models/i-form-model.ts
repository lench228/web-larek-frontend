import { iOrderData } from '../data/data';
import { iModel } from '../base/iModel';

export interface IFormModel extends iModel{
	orderData: iOrderData;
	error: string;

	input(value: string): void;
	validate(value: string): string | undefined;
	postOrder(formFields: iOrderData): Promise<object>;
}
