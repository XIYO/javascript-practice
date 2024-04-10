# 자바스크립트에서 스태틱 프라이빗 필드를 인스턴스가 참조 가능한가?

## 코드

```javascript
class Category {
    static rootCategory = new this();
    static #categories = new Map();

    constructor(absolutePath) {
        Category.#categories.set(absolutePath, this);
    }
}
```

## 문제

클래스 문법으로 객체를 만들던 도중 오류가 발생

```text
error: Uncaught (in promise) TypeError: Cannot read private member #categories from an object whose class did not declare it
        Category.#categories.set(absolutePath, this);
```

## 원인

클래스의 스태틱 필드가 초기화 되기 전에 사용하기 때문에 문제가 발생

## 해결

```javascript
class Category {
    static #categories = new Map();
    static rootCategory = new this(); // 생성자에서 #categories 필드를 참조 중이므로 초기화 이후 선언 

    constructor(absolutePath) {
        Category.#categories.set(absolutePath, this);
    }
}
```