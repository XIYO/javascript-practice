export default class StaticPrivate {
    static #filed = 1;
    static #filed2 = new Set();
    static #filed3 = new Map();

    constructor() {
        // this.#filed = 2; // this 를 사용할 경우 인스턴스의 필드를 참조
        StaticPrivate.#filed = 2; // 직접 클래스명을 명시해야함
        StaticPrivate.#filed2.add(1);
        StaticPrivate.#filed3.set(1, this);
    }

    static get filed() {
        return StaticPrivate.#filed;
    }
}

console.log(StaticPrivate.filed); // 2

const symbol = Symbol('filed');

class Category {
    static #categories = new Map();
    static rootCategory = new this();

    constructor(absolutePath) {
        Category.#categories.set(absolutePath, this);
    }

    static [symbol]() {
        this.#test();
    }

    static #test() {
        console.log('test');
    }
}

Category[symbol](); // test