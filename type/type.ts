// TypeScript 의 핵심 primitive types 은 모두 소문자

 // String X string O
let isDone:boolean =false;
isDone=true;
//console.log(typeof isDone)
let isOk:boolean =true;
//let isNotok=boolean =new Boolean(true) 
//대문자 사용불가 레퍼 객체 X

let decimal:number=6; // 10진수
let hex:number =0xf00d; // 16진수
let binary:number =0b1010; // 2진수
let octal:number =0o744; // 8진수
let notANumber:number =NaN;  // NaN
//string
let myName:string="HOYUN";

//symbol
//console.log(Symbol('test')===Symbol('test'))
// 내용이 같아도 위치가 다르기에 같지 않다
const sym =Symbol();
const obj={
   [sym] :"value", 
};

obj[sym]


// undefined&null 
// tsconfig에서  "strict": true 일떄는 변수값에 undefined&null 
// 를 대입이 불가능하다    
// let v : void: undefined;
//선언 이름이 기본 제공 전역 ID 'undefined'과(와) 충돌합니다



