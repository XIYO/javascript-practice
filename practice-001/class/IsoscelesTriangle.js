import { Triangle } from './Triangle.js';

export class IsoscelesTriangle extends Triangle {
	/** @type {number} */
	#side;
	/** @type {number} */
	#base;
	get side() {return this.#side;}
	get base() {return this.#base;}

	/**
	 *
	 * @param {symbol} symbol
	 * @param {number} base
	 * @param {number} side
	 */
	constructor(symbol, side, base) {
		super(symbol, [side, side, base]);
		this.#side = side;
		this.#base = base;
	}

	get area() {
		const height = Math.sqrt(this.side * this.side - (Math.pow(this.base, 2)) / 4);
		return (this.base * height) / 2;
	}
}
