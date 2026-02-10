

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
        console.log("Message Provided");
         resolve();
    },2000);
    })
 
    
}

function login(){
    return new Promise((resolve,reject)=>{
           setTimeout(()=>{
         console.log("Login");
         resolve();
    },4000)
    })
 
   
}

function getUserData(){
    return new Promise((resolve,reject)=>{
                setTimeout(()=>{
         console.log("Get User data");
          resolve();
    },3000)
    
    })
   
}

function displayData(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
         console.log("Display data");
        resolve();
    },6000)
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


