//Making our html page alive by using javascript in it
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function incremento() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function decremento() {
    count = count - 1
    countEl.innerText = count
    console.log(count)
}

function reseto() {
    count = count - count
    countEl.innerText = count
}

function save() {
    saveStr = " " + count + " - "
    saveEl.innerText += saveStr 
}