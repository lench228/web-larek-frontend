import { iComponent } from '../../types/base/iComponent';
import { Modal } from '../../types/base/Modal';
import { EventEmitter } from '../base/events';

export class FormView extends Modal implements iComponent {
	private readonly _container: HTMLElement;
	private readonly _events: EventEmitter;
	private readonly _template: HTMLElement;
	private readonly _element: HTMLElement;

	private formElements: HTMLElement[];
	private submitButton: HTMLElement;
	private nextButton: HTMLElement;

	constructor(
		container: HTMLElement,
		events: EventEmitter,
		template: HTMLElement,
		element: HTMLElement
	) {
		super();
		this._template = template;
		this._element = element;
		this._events = events;
		this._container = container;
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

	render(data?: object): HTMLElement {
		throw new Error('Method not implemented.');
	}
	private handleFormElementInput(e: InputEvent) {
		throw new Error('Method not implemented.');
	}
	private handleNextButtonClick(): HTMLElement {
		throw new Error('Method not implemented.');
	}
	private handleFormSubmit(e: SubmitEvent): Promise<object> {
		throw new Error('Method not implemented.');
	}
}
