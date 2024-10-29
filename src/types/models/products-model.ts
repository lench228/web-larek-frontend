import { iProduct } from '../data/data';

export interface productsModel {
	products: iProduct[];

	getItems(url: string): Promise<object>;
}
