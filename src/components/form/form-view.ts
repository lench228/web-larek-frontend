import { iComponent } from '../../types/base/iComponent';
import { Modal } from '../base/Modal';
import { EventEmitter } from '../base/events';
import { iOrderData, iProduct } from '../../types/data/data';

export class FormView extends Modal<iOrderData> {
	private formElements: HTMLElement[];
	private submitButton: HTMLElement;
	private nextButton: HTMLElement;

	constructor(
		container: HTMLElement,
		events: EventEmitter,
		template: HTMLElement
	) {
		super(container, events, template);
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
