import {EquilateralTriangle} from "./class/EquilateralTriangle.js";
import {Triangle} from "./class/Triangle.js";
import Shape from "./class/Shape.js";

const symbol = Symbol("EquilateralTriangle");
const equilateralTriangle = new EquilateralTriangle(symbol, 5);
equilateralTriangle.info();
const cloneEquilateralTriangle = structuredClone(equilateralTriangle);

// 복제된 객체의 인스턴스 타입 검사 어설션
console.assert(!(cloneEquilateralTriangle instanceof EquilateralTriangle), "cloneEquilateralTriangle should not be an instance of EquilateralTriangle");
console.assert(!(cloneEquilateralTriangle instanceof Triangle), "cloneEquilateralTriangle should not be an instance of Triangle");
console.assert(!(cloneEquilateralTriangle instanceof Shape), "cloneEquilateralTriangle should not be an instance of Shape");
console.assert(cloneEquilateralTriangle instanceof Object, "cloneEquilateralTriangle is not an instance of Object");

// 프로퍼티 존재성 검사 어설션
console.assert(typeof cloneEquilateralTriangle.area === 'undefined', "cloneEquilateralTriangle.area should be undefined");
console.assert(typeof cloneEquilateralTriangle.side === 'undefined', "cloneEquilateralTriangle.side should be undefined");

// 프로토타입 및 생성자 검사 어설션
console.assert(Object.getPrototypeOf(cloneEquilateralTriangle) !== EquilateralTriangle.prototype, "Prototype of cloneEquilateralTriangle should not be EquilateralTriangle.prototype");
console.assert(Object.getPrototypeOf(cloneEquilateralTriangle) === Object.prototype, "Prototype of cloneEquilateralTriangle should be Object.prototype");
console.assert(cloneEquilateralTriangle.constructor === Object, "Constructor of cloneEquilateralTriangle should be Object");

// 프로토타입 주입 후 인스턴스 검사 어설션
Object.setPrototypeOf(cloneEquilateralTriangle, EquilateralTriangle.prototype);
console.assert(cloneEquilateralTriangle instanceof EquilateralTriangle, "After prototype injection, cloneEquilateralTriangle is not an instance of EquilateralTriangle");
console.assert(cloneEquilateralTriangle instanceof Triangle, "After prototype injection, cloneEquilateralTriangle is not an instance of Triangle");
console.assert(cloneEquilateralTriangle instanceof Shape, "After prototype injection, cloneEquilateralTriangle is not an instance of Shape");
console.assert(cloneEquilateralTriangle instanceof Object, "cloneEquilateralTriangle is not an instance of Object after prototype injection");

let areaSuccess = false;
let sideSuccess = false;

// area 게터 호출 시도
try {
	cloneEquilateralTriangle.area;
	areaSuccess = true; // 예외가 발생하지 않으면 성공
} catch (error) {
	areaSuccess = false;
}

// side 게터 호출 시도
try {
	cloneEquilateralTriangle.side;
	sideSuccess = true; // 예외가 발생하지 않으면 성공
} catch (error) {
	sideSuccess = false;
}

// 어설션을 통한 검증
console.assert(areaSuccess, "Accessing cloneEquilateralTriangle.area threw an exception.");
console.assert(sideSuccess, "Accessing cloneEquilateralTriangle.side threw an exception.");

// 생성자 검사 어설션
console.assert(cloneEquilateralTriangle.constructor === EquilateralTriangle, "Constructor of cloneEquilateralTriangle should be EquilateralTriangle after prototype injection");

const moneySymbol = Symbol("money");
const human1 = {
	name: "John",
	age: 11,
	greet() {
		return `Hello, ${this.name}!`;
	},
	[moneySymbol]: 2000,
	isReach() {
		return this[moneySymbol] > 1000;
	}
};

// structuredClone을 객체에 복제 불가능한 속성이 들어가 있으면 불가능하다.
// const cloneHuman1 = structuredClone(human1);

// Human 생성자 함수 정의, 프로토 타입으로 정의 되어있으면 복제 가능
const Human = function (symbol, money) {
	this.name = "John";
	this.age = 11;
	this[symbol] = money;
};

// Human 프로토타입에 메서드 추가
Human.prototype.greet = function () {
	return `Hello, ${this.name}!`;
};

Human.prototype.isReach = function () {
	return this[moneySymbol] > 1000;
};

const human2 = new Human(moneySymbol, 2000);

// structuredClone을 사용하여 human2 복제
const cloneHuman = structuredClone(human2);

// 인스턴스 검증
console.assert(human2 instanceof Human, "human2 should be an instance of Human");
console.assert(human2 instanceof Object, "human2 should be an instance of Object");

console.assert(!(cloneHuman instanceof Human), "cloneHuman should not be an instance of Human before setting prototype");
console.assert(cloneHuman instanceof Object, "cloneHuman should be an instance of Object");

// 프로토타입 설정 후 인스턴스 검증
Object.setPrototypeOf(cloneHuman, Human.prototype);
console.assert(cloneHuman instanceof Human, "cloneHuman should be an instance of Human after setting prototype");
console.assert(cloneHuman instanceof Object, "cloneHuman should be an instance of Object after setting prototype");

// 메서드 실행성 검증
try {
	console.assert(cloneHuman.greet() === "Hello, John!", "cloneHuman.greet() should return 'Hello, John!'");
} catch (error) {
	console.error("Error calling cloneHuman.greet()", error);
}

// 심볼 속성 접근성 검증
console.assert(typeof cloneHuman[moneySymbol] === 'undefined', "cloneHuman should have money symbol property");
console.assert(!(cloneHuman.isReach()), "cloneHuman[moneySymbol] should be undefined");
