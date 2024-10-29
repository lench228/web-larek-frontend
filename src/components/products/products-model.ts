import { iProduct } from '../../types/data/data';
import { productsModel } from '../../types/models/products-model';

export class ProductsModel implements productsModel {
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
