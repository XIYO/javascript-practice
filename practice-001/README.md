# STRUCTURED CLONE ALGORITHM

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

브라우저 내부에서만 사용되던 깊은 복사가 API 로 제공되기 시작했습니다. \
현 시점에서는 모든 브라우저와 런타임 환경이 지원합니다. 자세한 내용은

메서드의 한계점을 알아봅니다.

## 테스트 코드 실행

```shell
# cd practice-001
deno run ./practice.js
```

## 복제 가능한 타입

- **기본 데이터 타입**: `String`, `Number`, `Boolean`, `null`, `undefined`, `BigInt`
- **복합 데이터 타입**:
    - `Object`: 일반 객체(`{}`)와 같은 리터럴 객체
    - `Array`: 배열 객체
- **특수 구조**:
    - `Map`, `Set`
    - `ArrayBuffer`, `SharedArrayBuffer`
    - `Date`
    - `RegExp`: 정규 표현식 객체
- **타입화 배열(Typed Arrays)**:
    - `Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array`, `Float64Array`, `BigInt64Array`, `BigUint64Array`
- **Blob**: 파일과 비슷한 불변 객체로, 원시 데이터를 나타냄
- **File**: 사용자 시스템의 파일을 나타내는 객체
- **ImageData**: 캔버스의 픽셀 데이터를 나타내는 객체

## 복제 불가능 타입

- **함수(Function)**: 함수는 복제할 수 없으며, 복제 시도 시 `DataCloneError` 오류를 발생시킵니다.
- **Error 객체**: 오류 객체는 복제되지 않습니다.
- **DOM 노드**: HTML이나 XML 문서의 구조를 나타내는 노드는 복제할 수 없습니다.
- **`WeakMap`과 `WeakSet`**: 약한 참조를 통해 객체를 저장하는 이 구조들은 복제할 수 없습니다.
- **일부 내장 객체 및 특수 객체**: 예를 들어, `Window`, `Document`, `Element` 등의 웹 API 객체는 `structuredClone`을 통해 복제할 수 없습니다.

## 알아두기

객체 내부에 복제 불가능 타입이 있을 경우 복제를 실패하지만
객체의 프로토타입에 복제 불가능 타입이 있을 경우 프로토타입은 `Object`가 되고 복제 가능합니다.ㅔ

## 결론
`structuredClone`은 웹 개발에서 깊은 복사를 수행할 때 매우 유용하며, 다양한 데이터 타입과 구조를 안전하게 복제할 수 있는 강력한 메커니즘을 제공합니다. 그러나 복제할 객체에 대한 타입과 구조를 이해하고, 어떤 타입이 복제 가능한지를 알고 있어야 오류를 피할 수 있습니다.
