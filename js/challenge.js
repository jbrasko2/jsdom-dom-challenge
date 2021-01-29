const counter = document.getElementById("counter")
const minusButton = document.getElementById("minus")
const plusButton = document.getElementById("plus")
const pauseButton = document.getElementById("pause")
const heartButton = document.getElementById("heart")
const likeList = document.querySelector(".likes")
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

heartButton.addEventListener("click", likeCount)
function likeCount() {
    let number = counter.innerHTML
    let foundLi = likeList.querySelector(`li[data-id="${number}"]`)
    if (!foundLi) {
        let li = document.createElement(`li`)
        li.innerHTML = `${number} has been liked <span> 1 </span> times`
        li.dataset.id = number
        likeList.append(li)
    } else {
        let spanNum = foundLi.children[0]
        let newValue = parseInt(spanNum.innerText)
        spanNum.innerText = ++newValue

    }

}

pauseButton.addEventListener("click", changeCounter)
function changeCounter(event) {
    if (event.target.innerHTML === " pause ") {
        clearInterval(intId)
        pauseButton.innerHTML = "resume"
        minusButton.disabled = true
        plusButton.disabled = true
        heartButton.disabled = true
    } else {
        intId = setInterval(countUp, 1000)
        pauseButton.innerHTML = " pause "
        minusButton.disabled = false
        plusButton.disabled = false
        heartButton.disabled = false
    }

}