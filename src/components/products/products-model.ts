import { iProduct } from '../../types/data/data';
import { IProductsModel } from '../../types/models/i-products-model';

export class ProductsModel implements IProductsModel {
	private readonly _products: iProduct[];

	constructor(products: iProduct[]) {
		this._products = products;
	}

	get products(): iProduct[] {
		return this._products;
	}

	public getItems = (url: string): Promise<object> => {
		return new Promise((resolve, reject) => {
			resolve({});
		});
	};
}
