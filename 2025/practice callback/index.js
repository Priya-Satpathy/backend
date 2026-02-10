function register(){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         console.log("Register");
        resolve();
    },1000)
   })
    
}

function sendEmail(){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         console.log("Message");
         resolve();
    },1000)
   })
   
}

function login(){
 return new Promise((resolve,reject)=>{
       setTimeout(()=>{console.log("Login ");
        resolve();

    },2000)
 })
    
}

function getUserData(){
return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Get Data");
       resolve();
    },3000)
})
    
}
function displayData(){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("Display Data");
        resolve();
    },4000)
  })
   
}

async function authenticate() {
    await register()
    await sendEmail()
    await login()
    await getUserData ()
    await displayData()

}
authenticate() 

console.log("Other data");