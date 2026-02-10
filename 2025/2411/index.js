function register(callback){
    setTimeout(()=>{
        console.log("Register called");
        callback();
    },3000)
    
}

function message(callback){
    setTimeout(()=>{
         console.log("Message called");
         callback();
    },1000)
   
}

function login(callback){
    setTimeout(()=>{console.log("Login called");
        callback();

    },2000)
    
}

function getData(callback){
    setTimeout(()=>{
        console.log("getdata called");
        callback();
    },3000)
    
}
function displayData(){
    setTimeout(()=>{
         console.log("displayData called");
     
    },4000)
   
}

register(()=>{
        message(()=>{
                  login(()=>{

                    getData(()=>{
                              displayData();
                    });
                  
                  });
                    
        });
      
});


console.log("Other data");