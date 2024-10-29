import { Modal } from '../../types/base/Modal';
import { iComponent } from '../../types/base/iComponent';
import { iOrderData } from '../../types/data/data';

export class CartView<T> extends Modal implements iComponent<T> {
	private readonly _container: HTMLElement;
	private readonly _model: T;
	private readonly _template: HTMLElement;
	private readonly _element: HTMLElement;

	constructor(
		container: HTMLElement,
		model: T,
		template: HTMLElement,
		element: HTMLElement
	) {
		super();
		this._template = template;
		this._element = element;
		this._model = model;
		this._container = container;
	}

	get element(): HTMLElement {
		return this._element;
	}
	get model(): T {
		return this._model;
	}
	get template(): HTMLElement {
		return this._template;
	}
	get container(): HTMLElement {
		return this._container;
	}

	render(data: object): HTMLElement {
		throw new Error('Method not implemented.');
	}

	private handleTrashButtonClick(): HTMLElement {
		throw new Error('Method not implemented.');
	}

	private handleOrderButtonClick(data: iOrderData): void {
		throw new Error('Method not implemented.');
	}
}
