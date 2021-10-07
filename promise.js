const check =true;

const promise = new Promise((resolve  , reject) =>{
if (check) {
    resolve('done');
}else{
    reject('undone');
}

});

console.log(promise);
