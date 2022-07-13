# typescript


## 0713 typescipt start

typescript에서 지정한 타입을 설정하여 좀 더 명확하게 코딩을 하여 오류를 줄여줍니다

- 변수에 타입 설정
```typescript
let str: string = 'hi';
let num: number = 100;

let arr: Array = [1, 2, 3];
let arr2: number[] = [1, 2, 3];

let obj: object = {};
let obj2: { name: string, age: number} = {
 name: 'hoho',
 age: 22
};
```
-  함수에 타입 설정
```typescript

function add(a: number, b: number): number {
return a+b;
}
//옵셔널 파라미터
function log(a: string, b?: string, c?: string) {
 console.log(a);
}
```

### 자바스크립트에서 존재하지 않는 타입 

- Tuple: 배열의 타입 순서와 배열 길이를 지정할 수 있는 타입입니다.
```typescript
let arr: [string, number] = ['aa', 100];
```
- Enum: Number 또는 String 값 집합에 고정된 이름을 부여할 수 있는 타입입니다. 값의 종류가 일정한 범위로 정해져 있는 경우에 유용합니다. 기본적으로 0부터 시작하며 값은 1씩 증가합니다.
```typescript

enum Shoes {
 Nike = '나이키',
 Adidas= '아디다스'
}
```
- Any: 모든 데이터 타입을 허용합니다.

- Void: 변수에는 undefined와 null만 할당하고 함수에는 리턴 값을 설정할 수 없는 타입입니다.

- Never: 특정 값이 절대 발생할 수 없을 때 사용합니다.
#
