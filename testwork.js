console.log("hello")


function calculateTip(){
    const amount = parseFloat(document.getElementById("amount").value)
    if(isNaN(amount)){
        alert("amount must be a number")
        return
    }


const tipType = document.querySelector('input[name= "tipType"]:checked').value
console.log(tipType)
if(tipType === "percentage"){
    const percentage = parseFloat(document.getElementById("percentage").value)
    if(isNaN(amount) || isNaN(percentage)){
        alert("this is not a number")
       
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
        alert("tip shouldnt be more than amount")
        return
       }

    }

}