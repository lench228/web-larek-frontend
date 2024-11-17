import { Modal } from '../base/Modal';
import { iComponent } from '../../types/base/iComponent';
import { iProduct } from '../../types/data/data';
import { EventEmitter } from '../base/events';
import { Component } from '../base/component';
import { CDN_URL } from '../../utils/constants';
import { createElement } from '../../utils/utils';

export class CardView extends Modal<iProduct> {
	private readonly _button: HTMLElement;
	private _id: string;

	constructor(
		container: HTMLElement,
		event: EventEmitter,
		template: HTMLElement
	) {
		super(container, event, template);
		this._container = container.querySelector('.modal__content');
		this._container.appendChild(this.template);

		this._button = this._container.querySelector('.card__button');
		this._button.addEventListener('click', this.handleBuyButtonClick);
	}

	renderLoading() {
		this.setHidden(this._container);
	}

	stopLoading() {
		this.setVisible(this._container);
	}

	set title(title: string) {
		this.setText(this._container.querySelector('.card__title'), title);
	}

	set description(description: string) {
		this.setText(this._container.querySelector('.card__text'), description);
	}

	set category(category: string) {
		this.setText(this._container.querySelector('.card__category'), category);
	}

	set price(price: string) {
		const priceEl = this._container.querySelector(
			'.card__price'
		) as HTMLElement;
		console.log(price);
		if (price) {
			this.setText(priceEl, price + ' ' + 'синапсов');
			this.setDisabled(this._button, false);
		} else {
			this.setText(priceEl, 'Бесценно');
			this.setDisabled(this._button, true);
		}
	}

	set image(url: string) {
		this.setImage(this._container.querySelector('.card__image'), CDN_URL + url);
	}

	set id(id: string) {
		this._id = id;
	}

	get id(): string {
		return this._id;
	}
	// Добавить enum
	private handleBuyButtonClick = (): void => {
		this.toggleButton(
			this.handleBuyButtonClick,
			this.handleDeleteButtonClick,
			'Убрать из корзины',
			'add'
		);
	};

	private handleDeleteButtonClick = (): void => {
		this.toggleButton(
			this.handleDeleteButtonClick,
			this.handleBuyButtonClick,
			'В корзину',
			'remove'
		);
	};

	private toggleButton = (
		removeCb: () => void,
		addCb: () => void,
		text: string,
		eventName: string
	): void => {
		this._button.removeEventListener('click', removeCb);
		this._button.addEventListener('click', addCb);
		this._button.textContent = text;
		this._events.emit('cart:' + eventName, { id: this.id });
	};
}
