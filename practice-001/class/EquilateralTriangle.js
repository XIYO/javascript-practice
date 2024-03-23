import { Triangle } from './Triangle.js';

export class EquilateralTriangle extends Triangle {
	/** @type {number} */
	#side;
	get side() {return this.#side;}

	/**
	 *
	 * @param {symbol} symbol
	 * @param {number} side
	 */
	constructor(symbol, side) {
		super(symbol, [side, side, side]);
		this.#side = side;
	}

	get area() {
		return (Math.sqrt(3) / 4) * Math.pow(this.side, 2);
	}
}
