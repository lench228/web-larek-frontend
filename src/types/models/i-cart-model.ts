import { iCartProduct } from '../data/data';

export interface iCartModel {
	products: iCartProduct[];
	total: number;

	add(id: string): void;
	remove(id: string): void;
}
