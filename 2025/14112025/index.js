const fulfilled = false
const promise = new Promise((resolve,reject)=>{

    if(fulfilled==true){
        resolve();
    }else{
        reject();
    }
})
console.log(promise)