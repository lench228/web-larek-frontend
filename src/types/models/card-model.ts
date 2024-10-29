import { iProduct } from '../data/data';

export interface cardModel {
	product: iProduct;
	getCard(url: string): Promise<object>;
	buyProduct(): void;
	deleteProduct(): void;
}
