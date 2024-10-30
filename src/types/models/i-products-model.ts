import { iProduct } from '../data/data';

export interface IProductsModel {
	products: iProduct[];

	getItems(url: string): Promise<object>;
}
