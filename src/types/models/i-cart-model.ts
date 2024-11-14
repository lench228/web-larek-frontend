import { iCartProduct } from '../data/data';
import { iModel } from '../base/iModel';

export interface iCartModel extends iModel {
	products: iCartProduct[];
	total: number;

	add(id: string): void;
	remove(id: string): void;
}
