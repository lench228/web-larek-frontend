import { Modal } from '../base/Modal';
import { iComponent } from '../../types/base/iComponent';
import { iCartProduct, iOrderData } from '../../types/data/data';
import { EventEmitter } from '../base/events';

export class CartView extends Modal<iCartProduct> {
	private _trashButton: HTMLElement;
	private _orderButton: HTMLElement;
	private _headerCart: HTMLElement;

	constructor(
		container: HTMLElement,
		event: EventEmitter,
		template: HTMLElement
	) {
		super(container, event, template);
		this._container = container.querySelector('.modal__content');
		this._headerCart = document.querySelector('.header__basket');

		this._headerCart.addEventListener('click', this.#handleHeaderCartClick);
	}

	#handleHeaderCartClick = (): void => {
		this._events.emit('cart:open');
	};

	#handleTrashButtonClick(): HTMLElement {
		throw new Error('Method not implemented.');
	}

	#handleOrderButtonClick(data: iOrderData): void {
		throw new Error('Method not implemented.');
	}
}
