import { Modal } from '../base/Modal';
import { iComponent } from '../../types/base/iComponent';
import { iCartProduct, iOrderData } from '../../types/data/data';
import { EventEmitter } from '../base/events';

export class CartView extends Modal<iCartProduct> {
	private _trashButton: HTMLElement;
	private _orderButton: HTMLElement;

	constructor(
		container: HTMLElement,
		event: EventEmitter,
		template: HTMLElement
	) {
		super(container, event, template);
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
