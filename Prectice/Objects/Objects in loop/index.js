const newObject ={
    fullName : "pruthvirajsinh",
    age : 21, 
    logIn : false,
    email : "prroyals@gmail.com"
};


function clickObject () {
    // loop
    console.log("Before");
    console.log(newObject.logIn);
    for( let i = 0 ; i < 1 ; i++){
        // timeout 
        setTimeout(() =>{
            // newObject login condition 
        if(newObject.logIn === false){
            newObject.logIn = true ;
        
        }else{
            newObject.logIn = false ;
        }
        console.log("After");
        console.log(newObject.logIn);
        }, 2000);
    
    }



}

clickObject();