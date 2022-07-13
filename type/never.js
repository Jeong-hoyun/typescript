"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while ()
        ;
}
//never 타입은 모든 타입의 서브 타입
let a = 'hello';
if (typeof a !== 'string') {
    a;
}
