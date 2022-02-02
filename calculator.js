let num1 = 8
let num2 = 2



document.getElementById("num1-el").textContent = num1

document.getElementById("num2-el").textContent = num2

let outPut = document.getElementById("sum-el")
console.log(outPut)
function add(){
    sum = num1 + num2
    outPut.textContent = "Sum:  " + sum
    console.log(sum)
}

function subtract(){
    diff = num1 - num2
    outPut.textContent = "Difference:  " + diff
    console.log(diff)
}

function multiply(){
    pro = num1 * num2
    outPut.textContent =  "Product:  " + pro
    console.log(pro)
}

function divide(){
    quo = num1/num2
    outPut.textContent =  "Quotient:  " + quo
    console.log(quo)
}