const worker = new Worker(import.meta.resolve("./code/worker.js"), {
	type: "module",
});

// 워커로부터 메시지 수신
worker.onmessage = function(e) {
	console.log('Received from worker:', e.data);
	console.log('Using instanceof Array:', e.data instanceof Array); // 메인 스레드의 실행 컨텍스트 내에서 true 또는 false
	console.log('Using Array.isArray:', Array.isArray(e.data)); // 항상 true
};

// 워커로 메시지 전송
worker.postMessage('Hello Worker');

// isArray와 instanceof의 속도 측정 1만개의 객체를 생성하여 배열과 객체를 구분하는 속도를 측정

/** @type {Array<Array<number>>} */
const arr = [];
const time = 10000000000;

// 1st
// test environment deno
// Array.isArray: 10524ms
console.time('Array.isArray');
for (let i = 0; i < time; i++) {Array.isArray(arr);}
console.timeEnd('Array.isArray');

// 2nd
// test environment deno
// instanceof: 39733ms
console.time('instanceof');
for (let i = 0; i < time; i++) {(arr instanceof Array);}
console.timeEnd('instanceof');

Array.polyfillIsArray = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
}

// 3rd
// test environment deno
// Array.dummyIsArray: 68131ms
console.time('Array.polyfillIsArray');
for (let i = 0; i < time; i++) {Array.polyfillIsArray(arr);}
console.timeEnd('Array.polyfillIsArray');