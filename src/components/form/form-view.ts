import { iComponent } from '../../types/base/iComponent';
import { Modal } from '../../types/base/Modal';

export class FormView<T> extends Modal implements iComponent<T> {
	private readonly _container: HTMLElement;
	private readonly _model: T;
	private readonly _template: HTMLElement;
	private readonly _element: HTMLElement;
	private formElements: HTMLElement[];
	private submitButton: HTMLElement;
	private nextButton: HTMLElement;

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
