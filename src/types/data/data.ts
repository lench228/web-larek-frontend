export interface iOrderData {
	payment: string;
	mail: string;
	phone: string;
	address: string;
	total: number;
	items: string[];
}

export interface iProduct {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number | undefined;
}

export interface iApiProducts {
	total: number;
	items: iProduct[];
}

export type iCatalogProduct = Omit<iProduct, 'description'>;

export interface iCartProduct {
	id: string;
	price: number;
	title: string;
}
