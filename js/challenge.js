const counter = document.getElementById("counter")
const minusButton = document.getElementById("minus")
const plusButton = document.getElementById("plus")
const pauseButton = document.getElementById("pause")
const heartButton = document.getElementById("heart")
let intId = setInterval(countUp, 1000)

function countUp() {
    ++counter.innerHTML
}

minusButton.addEventListener("click", subtractFromCounter)
function subtractFromCounter() {
    --counter.innerHTML
}

plusButton.addEventListener("click", addToCounter)
function addToCounter() {
    ++counter.innerHTML
}

pauseButton.addEventListener("click", changeCounter)
function changeCounter(event) {
    debugger
    if (event.target.innerHTML === " pause ") {
        window.clearInterval(intId)
        pauseButton.innerHTML = "resume"
        minusButton.disabled = true
        plusButton.disabled = true
        heartButton.disabled = true
    } else {
        let intId = setInterval(countUp, 1000)
        pauseButton.innerHTML = " pause "
        minusButton.disabled = false
        plusButton.disabled = false
        heartButton.disabled = false
    }

}