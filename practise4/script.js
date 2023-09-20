let promiseObj=new promise((resolve,reject)=> {
    console.log("check for order");
    resolve("item is available");
    //reject("item is unavailable");

});
console.log(promiseObj);
