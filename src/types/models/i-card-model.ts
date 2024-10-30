import { iProduct } from '../data/data';

export interface iCardModel {
	product: iProduct;
	getCard(url: string): Promise<object>;
	buyProduct(): void;
	deleteProduct(): void;
}
