import { Modal } from '../base/Modal';
import { iComponent } from '../../types/base/iComponent';
import { iProduct } from '../../types/data/data';
import { EventEmitter } from '../base/events';
import { Component } from '../base/component';
import { CDN_URL } from '../../utils/constants';
import { createElement } from '../../utils/utils';

export class CardView extends Modal<iProduct> {
	private _buyButton: HTMLElement;
	private _deleteButton: HTMLElement;
	constructor(
		container: HTMLElement,
		event: EventEmitter,
		template: HTMLElement
	) {
		super(container, event, template);
		this._container = container.querySelector('.modal__content');

		this._container.appendChild(this.template);
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
		this.setText(
			this._container.querySelector('.card__price'),
			price + ' ' + 'синапсов'
		);
	}

	set image(url: string) {
		this.setImage(this._container.querySelector('.card__image'), CDN_URL + url);
	}
	private handleBuyButtonClick(event: MouseEvent): void {
		throw new Error('Method not implemented.');
	}
	private handelDeleteButtonClick(event: MouseEvent): void {
		throw new Error('Method not implemented.');
	}
}
