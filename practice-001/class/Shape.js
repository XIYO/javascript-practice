export default class Shape {
	static shapeManager = new Map();
	#symbol;
	get symbol() {return this.#symbol;}

	/**
	 *
	 * @param {symbol} symbol
	 */
	constructor(symbol) {
		this.#symbol = symbol;
		Shape.shapeManager.set(symbol, this);
	}

	info() {
		console.log(`Shape: ${this.#symbol.toString()}`);
	}
}