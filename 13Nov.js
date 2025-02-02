function clicked(){

    setTimeout (function(){
         document.body.style.backgroundColor="red"

    },3000);
}

var x=function welcome(){
    setTimeout (function(){
        alert(" Hii Welcome")
        setTimeout (function(){
            clearTimeout(x)
        },2000)
    },2000)
}
clearInterval(x)



for(i=0;i<=10; ){
    setInterval(() => {
   console.log(i);
   i++
   
    },2000);
}


let countdownNumber = 10;
const countdownElement = document.getElementById("countdown");
const timer = setInterval(() => {
    countdownNumber--;
    countdownElement.textContent = countdownNumber;
    if (countdownNumber === 0) {
        clearInterval(timer);
        countdownElement.textContent = "Time's up!";
    }
}, 1000);

// setInterval(() => {

    // document.getElementById("colorbox")
    document.body.style.backgroundColor="red"
    setTimeout(() => {

        // document.getElementById("colorbox")
        document.body.style.backgroundColor="green"
        setTimeout(() => {

            // document.getElementById("colorbox")
            document.body.style.backgroundColor="yellow"
            setTimeout(() => {

                // document.getElementById("colorbox")
                document.body.style.backgroundColor="pink"
                setTimeout(() => {

                    // document.getElementById("colorbox")
                    document.body.style.backgroundColor="blue"
                    setTimeout(() => {

                        // document.getElementById("colorbox")
                        document.body.style.backgroundColor="black"

                        setTimeout(() => {

                            // document.getElementById("colorbox")
                            document.body.style.backgroundColor="red"
                            setTimeout(() => {
                        
                                // document.getElementById("colorbox")
                                document.body.style.backgroundColor="green"
                                setTimeout(() => {
                        
                                    // document.getElementById("colorbox")
                                    document.body.style.backgroundColor="yellow"
                                    setTimeout(() => {
                        
                                        // document.getElementById("colorbox")
                                        document.body.style.backgroundColor="pink"
                                        setTimeout(() => {
                        
                                            // document.getElementById("colorbox")
                                            document.body.style.backgroundColor="blue"
                                            setTimeout(() => {
                        
                                                // document.getElementById("colorbox")
                                                document.body.style.backgroundColor="black"
                                                
                                            },1000);
                                            
                                        },1000);
                                        
                                    },1000);
                                    
                                },1000);
                                
                            },1000);
                        
                            
                        },1000);
                        
                    },1000);
                    
                },1000);
                
            },1000);
            
        },1000);
        
    },1000);

    
},1000);






// // setTimeout(() => {

// // document.body.style.backgroundColor="green"
// // // document.body.style.backgroundColor="red"


    
// // }, 2000);


// setInterval(() => {
//     document.body.style.backgroundColor="red"
//     setInterval(() => {
//         document.body.style.backgroundColor="white"
        
//     }, 3000);
    
// }, 2000);