// Function to hide and show pages
let loginPage = document.querySelector(".login")
let pageOne = document.querySelector(".pageOne")
pageOne.style.display = 'none'
// Flashy animated text at mainContent of website
let titleAnchor = document.querySelector("#titleText") 
let headAnchor = document.querySelector("#headText")
let titleText = 'Hello Stranger 👋 and welcome to my quiz'
let headText = 'You can learn 📚 many new things here while also having fun 😎 I hope you enjoy 🤞'
let a = -1
let i = 0
function textAnimation (anchor, text, size) {
    if (size <= i) {
        a++
        i = 0
        turn()
        return
    }
    anchor.append(text[i])
    i++
    setTimeout (
        () => {
            textAnimation(anchor, text, size)
        }, 40
    )
}
function turn () {a == 0 ? textAnimation(headAnchor, headText, headText.length) : false ;}
// Form submission
function submit () {
    let name = document.querySelector('#name').value
    if (name == '') {
        alert('Please enter your name')
    }
    else {
        titleText = `Hello ${name} 👋 and welcome to my quiz`
        loginPage.style.display = 'none'
        pageOne.style.display = 'contents'
        textAnimation(titleAnchor, titleText, titleText.length)
    }
}

function skip () {
    loginPage.style.display = 'none'
    pageOne.style.display = 'contents'
    textAnimation(titleAnchor, titleText, titleText.length)
}
// Math Quiz
function mathQuiz () {
    console.log('Math yayyyyy')
}
