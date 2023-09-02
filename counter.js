var count = 0
document.getElementById("counter").innerHTML = count

function decrease(){
   if(count == 0){
       count = 0
    }
       else {count --
    }
   
      
      document.getElementById("counter").innerHTML = count 
      console.log(count)
      
}

function increase(){
    count ++
    document.getElementById("counter").innerHTML = count 
    console.log(count)
}


//event binding
//difference of let, var, and const with examples (code examples)
//read and understand the different about conditional statements
//conditionals: if, else switch
// read about operators in javascript code examples
//data types


//element.addEventListener(event, eventHandler, useCapture); this is an event  listener

//var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.  