// any와 짝으로 any 보다 편하

declare const maybe:unknown;

const aNum:number=maybe;



if(maybe===true){
    const aBoolean:boolean=maybe;
   // const aString:string=maybe
}


if(typeof maybe==='string'){
    const aString:string=maybe
}