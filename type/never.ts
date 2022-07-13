function error(message:string):never{
    throw new Error(message);
}

function fail(){
    return error("failed")
}

function infiniteLoop(messages:string):never{  
    throw new Error(messages);
}

//never 타입은 모든 타입의 서브 타입

let a:string='hello';

if(typeof a!=='string'){
    a;
}