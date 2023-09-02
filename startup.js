document.getElementById('header').innerHTML = "this is a header"

function add(number1, number2){
    let result = parseInt(number1+number2);
    return result;
}

function collectvalues(){
    const a= parseFloat(document.getElementById('number1').value)
    const b=parseFloat(document.getElementById('number2').value)
  
   const answer= add(a, b)
   console.log(answer)
    document.getElementById('answer').innerHTML = answer
}


function add(){
    var num1 = Number(document.getElementById("number1").value)
    var num2 = Number(document.getElementById("number2").value)
    var sum = num1 + num2
    document.getElementById("txtsum").value = String(sum)
}
