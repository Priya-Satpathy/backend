// function register(){
//     console.log("Register called");
    
// }
// function message(){
//     console.log("message provided");
    
// }
// function login(){
//     console.log("login called");
    
// }
// function getData(){
//     console.log("Data retrieved");
    
// }
// function displayData(){
//     console.log("Data displayed");
    
// }

// register()
// message()
// login()
// getData()
// displayData()

// console.log("Other data");





/* callback hell */

function register(callback){
    setTimeout(()=>{
        console.log("Register called");
        callback();
    },3000)    
}
function message(callback){
     setTimeout(()=>{
        console.log("message called");
        callback();
    },1000)  
    
}
function login(callback){
    setTimeout(()=>{
        console.log("login called");
        callback();
    },5000)  
    
}
function getData(callback){
     setTimeout(()=>{
        console.log("getData called");
        callback();
    },2000)  
    
}
function displayData(){
    setTimeout(()=>{
        console.log("displayData called");
    },1000)  
    
}

register(()=>{
    message(()=>{
        login(()=>{
            getData(()=>{
                 displayData()
            })
           
        })
        
    })
    
})


console.log("Other data");