export default class StaticPrivate {
    static #filed = 1;

    constructor() {
        this.#filed = 2;
    }
}