# 자바스크립트에서 스태틱 프라이빗 필드를 인스턴스가 참조 가능한가?


## 문제

```javascript
class Test {
    static #field = 1;
    constructor() {
        console.log(Test.#field);
    }
}
```
