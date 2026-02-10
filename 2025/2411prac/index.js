function register(){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            console.log("Register");
             resolve();
    },4000)
       
    })
  
    
}

function getEmailId(){
    return new Promise((resolve,reject)=>{
                setTimeout(()=>{
        console.log("Register");
         resolve();
    },2000)
        
    
    })

}

function login(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("Login")
         resolve();
    },1000)
       ;
    })
   
    
}
function getUserData(){
    return new Promise((resolve,reject)=>{
               setTimeout(()=>{
          console.log("Get user data")
          resolve();
    },500)
        
    })
 
  
}
function displayData(){
    return new Promise((resolve,reject)=>{
               setTimeout(()=>{
         console.log("Display Data")
          resolve();
    },800)
   
    })
 
   
}

async function authenticate() {
     await register()
    await getEmailId()
    await login()
    await getUserData()
    await displayData()

}
authenticate()
console.log("Other data")
