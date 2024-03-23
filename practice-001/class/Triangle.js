import Shape from './Shape.js';

export class Triangle extends Shape {
	#perimeter;

	/**
	 * @param {symbol} shapeName
	 * @param {number[]} sideLengths
	 */
	constructor(shapeName, sideLengths) {
		super(shapeName);
		this.#perimeter = sideLengths.reduce((acc, val) => acc + val, 0);
	}

	/**
	 * @abstract
	 */
	get area() {
		throw new Error('Not implemented');
	}

	info() {
		super.info();
		console.log(`Perimeter: ${this.#perimeter}`);
		console.log(`Area: ${this.area}`);
	}


}
