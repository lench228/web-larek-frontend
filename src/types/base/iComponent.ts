export interface iComponent<T> {
	container: HTMLElement;
	model: T;
	template: HTMLElement;
	element: HTMLElement;

	render(data?: object): HTMLElement;
}
