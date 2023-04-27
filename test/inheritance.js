function* numbersGenerator() {
    for (let i = 1; i <= 10; i++) {
      yield i;
    }
  }
  
  const numbers = numbersGenerator();

class Parent {
    static StaticMember = (() => {
        console.log("Parent's StaticMember");
        return 1;
    })();

    Member = (() => {
        console.log("Parent's Member");
        return 1;
    })();

    static #instance;

    constructor() {
        if (Parent.#instance) {
            console.log('instance already ')
            return Parent.#instance;
        }
        Parent.#instance = this;
        console.log('this is parent constructor');
    }
}

class Child extends Parent {
    static StaticMemberChild = (() => {
        console.log("Child's StaticMember");
        return 1;
    })()

    MemberChild = (() => {
        console.log("Child's Member");
        return 1;
    })();

    constructor() {
        super();
        console.log('this is child constructor');
        this.innerMember = new InnerChild();
        console.log(`innerNumber = ${this.innerNumber}`);
        this.innerNumber = (() => {let n = numbers.next().value; console.log('           ' + n); return n})();
    }
}

class InnerChild {
    member = {
        a: 1,
        b: 2,
    };

    constructor() {
        console.log('this is inner child constructor');
    }
}


let chibi = new Child();
let chibi2 = new Child();
console.log(chibi === chibi2); // true
console.log(chibi.innerMember === chibi2.innerMember); // false
console.log(chibi.innerMember);
console.log(chibi2.innerMember);
console.log(chibi.innerNumber);
console.log(chibi2.innerNumber);