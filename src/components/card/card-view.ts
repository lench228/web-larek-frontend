import { Modal } from '../../types/base/Modal';
import { iComponent } from '../../types/base/iComponent';
import { iProduct } from '../../types/data/data';
import { EventEmitter } from '../base/events';

export class CardView extends Modal implements iComponent {
	private _container: HTMLElement;
	private _events: EventEmitter;
	private _template: HTMLElement;
	private _element: HTMLElement;

	private _buyButton: HTMLElement;
	private _deleteButton: HTMLElement;

	constructor() {
		super();
	}


	get element(): HTMLElement {
		return this._element;
	}

	get events(): EventEmitter {
		return this._events;
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

	private handleBuyButtonClick(event: MouseEvent): void {
		throw new Error('Method not implemented.');
	}
	private handelDeleteButtonClick(event: MouseEvent): void {
		throw new Error('Method not implemented.');
	}
}
