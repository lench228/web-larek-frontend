import { iOrderData } from '../data/data';

export interface formModel {
	orderData: iOrderData;
	error: string;

	input(value: string): void;
	validate(value: string): string | undefined;
	postOrder(formFields: iOrderData): Promise<object>;
}
