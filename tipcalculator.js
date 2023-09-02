function calculateTip(){
    const amount = parseFloat(document.getElementById("amount").value)
    if(isNaN(amount)){
        alert("Amount must be a number")
        return
    }
    const tipType = document.querySelector('input[name="tipType"]:checked').value
    if(tipType === "percentage"){
        const percentage = parseFloat(document.getElementById("percentage").value)
        if(isNaN(amount) || isNaN(percentage)){
            alert("This is not a number")
            return 
        }
        const tipAmount = (amount * percentage)/100
        const total = amount + tipAmount
        document.getElementById("tipAmount").textContent = tipAmount.toFixed(2)
        document.getElementById("total").textContent = total.toFixed(2)
    }
    else if(tipType === "custom"){
        const tipAmount = parseFloat(document.getElementById("percentage").value)
        const total = amount + tipAmount
        document.getElementById("tipAmount").textContent = tipAmount.toFixed(2)
        document.getElementById("total").textContent = total.toFixed(2)

        if(tipAmount >= amount){
            alert("Tip shouldnt be more than amount")
            return
        }
    }
    
   
}


/*const names = [elvis, daniel, john]
console.log('we have an array of names::', names)
console.log('the first name in the array of names is::', names[0])
console.log('the langht of the array is::', names.lenght)
console.log('the last item in the array of names is::', names[names.length - 1])
//stephen@nerdbug.io
*/









//for(initialisation; condition; increment/decrement){
    //code to be repeated
//}

/*
            Initialization: This is where you set up the starting point for the loop, like declaring a counter variable.
            Condition: This is a condition that's checked before every iteration of the loop. If the condition is true, the loop continues; if it's false, the loop stops.
            Increment/Decrement: After each iteration of the loop, this step is executed. It usually increases or decreases the counter variable.
            Code to be repeated: This is the code that gets excecuted in every iteration of the loop.
            */

for(let i = 1; i < 50; i++){
    console.log(i)
}

//print out all even number between 1-10
for(let num = 2; num <= 10; num += 2){// num + num = 2
    console.log(num)
}
 
for(let num = 1; num <= 20; num += 2){
    console.log(num)
}



function sumOFNumbers(){
    let sum = 0
    for(let i = 1; i <= 10; i++){
        sum += i
    }
    return sum
}

console.log('the sum of numbers between 1-10 is:' ,sumOFNumbers())


        // Print out the times table of 2 between 1 and 12 using For loop


       // const number = parseInt(prompt('Enter an integer: ', ));

//creating a multiplication table
/*for(let i = 2; i <= 12; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}
*/

/*function timesTable() {
    let num = 5
    for(let i = 1; 1 <= 12; i++) {

        const result = i * num;
        console.log(result)
    }
        
}
console.log(timesTable())*/

const array = [5, 4, 3, 2, 1]


function arrayMin(array){
   var min = array[0]; 
   for(var i = 1; i < array.length; i++)
   {if(min > array[i]){
    
        min = array[i]
   }
   
   }
   return min;
}
   console.log(arrayMin(array))



   //Create a function that accepts an array and creates a new array with squared values of all the elments
//Create a function that counts the number of even numbers in an array.


//ELvis Assignment 
        /*
        Create a function that accepts an array and creates a new array with squared values of all the elments
        Create a function that counts the number of even numbers in an array.

        [2,6,5]
        n ** 2
        [4,36,25]

        n % 2 == 0
        [2,6,5]
        2
        */



        const squared = [1, 2, 3, 4]


        function ret(squared) {
            var ret = array[i]
            n ** 2
        }

        function arrayfirst(arraySquared){
            const square = []
            for(let i = 0; i < arraySquared.length ;i++){
             var squaredNum = arraySquared[i] ** 2
             square.push(squaredNum)
            }
            console.log(square)
        }
        
        arrayfirst(squared)

    function even(){
       
    }


    const evenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    function countEven(Evened){
        let evenCount = 0
        for(let i = 2 ;i <= Evened.length ;i++){
           if(Evened[i]%2 == 0){
            evenCount++
           }
        }
        console.log(evenCount)
    }

    countEven(evenNum)



    //checking for numbers divisible by 5






    const fiveCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


    function Byfive(everyFive){
        let fiveNum = 0
        for(let i = 0 ;i <= everyFive.length ;i++){
           if(everyFive[i]%5 == 0){
            fiveNum++
           }
        }
        console.log(fiveNum)
    }

    Byfive(fiveCount)




   /* Create a function that gets the number of occurrence of a specific number in an array

            function (arrayN, numberN)
            function numberOfOccurrence([5,4,5,3,7,9], 5)
            2

            Create a  function that prints the multiplication table from 1 to 12 of a given number
            function generateMultiplicationTable(12)*/      


            var arr = [8, 5, 6, 5, 17, 5, 6, 17, 5, 16, 8, 2, 5, 8];

            function elementCount(arr, element){
                return arr.filter((currentElement) => currentElement == element).length;
               };
               console.log("the occurence of number is:", elementCount( arr , 8));



            function getAverage(arrayAverage){
                
                let sum = 0;
                for (let i = 0; i < arrayAverage.length; i++){
                    let currentNum = arrayAverage[i]
                    sum += currentNum;
                }
                console.log("sum is:", sum)
              let average = sum /arrayAverage.length
                return average
            }
            

         console.log( "the average is:", getAverage([2, 8, 10, 16]))   


         function minValue(minArray){
            var minimum = minArray[0];
            for(var i = 1; i < minArray.length; i++){
            if(minimum > minArray[i]){ 
                minimum = minArray[i]
            }
              }
              return minimum
        }
        console.log( minValue([7, 5, 3, 4]))  
      



        const highArray = [1, 4, 5, 10, 3, 7, 8, 15, 6, 6]

      function highVal(highArray){
        //this function finds the maximuum number in any array
        var highNum = highArray[0]
        for(let i = 0; i < highArray.length; i++){
            if(highNum < highArray[i] ){
                highNum = highArray[i]            
            }   
            
        }
        return highNum
    }
    console.log("the highest value is: ", highVal(highArray))


    function arrayAverage(getArrayAverage){
        let sum = 0;
        for(let i = 0; i < getArrayAverage.length; i++){
            let currentArraySum = getArrayAverage[i]
            sum += currentArraySum;
        }
        let average = sum / getArrayAverage.length
        return average
    }

    console.log("the average of these numbers is:", arrayAverage([2, 8, 10, 16]))


    const Occurednumbers = [5, 5, 10, 12, 15, 5, 6, 3, 2, 5, 2, 10,]
    function occurNum(Occurednumbers, element){
        return Occurednumbers.filter((currentElement) => currentElement == element).length;
    };
    console.log("the occurence of number is:", elementCount( Occurednumbers , 5));

    
    function timesFive(fiveArray){
        const numbersCountFive = []
        for(let i = 0; i < fiveArray.length; i++){
        var five = fiveArray[i] * 5
            numbersCountFive.push(five)
        }
        console.log(numbersCountFive)
    }
    timesFive([1, 2, 3, 4, 5, 6, 7])



   

      