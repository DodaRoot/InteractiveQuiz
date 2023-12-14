// Function to hide and show pages
let loginPage = document.querySelector(".login")
let pageOne = document.querySelector(".pageOne")
let coursePage = document.querySelector(".courseContent")
let pointPage = document.querySelector('.points')
pointPage.style.display = 'none'
pageOne.style.display = 'none'
coursePage.style.display = 'none'

// Flashy animated text at mainContent of website
let titleAnchor = document.querySelector("#titleText") 
let headAnchor = document.querySelector("#headText")
let titleText = 'Hello Stranger 👋 and welcome to my quiz'
let headText = 'You can learn 📚 many new things here while also having fun 😎 I hope you enjoy 🤞'
let card = document.querySelectorAll(".card")
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
function turn () {a == 0 ? (textAnimation(headAnchor, headText, headText.length), card.forEach((x) => x.style.animationName = 'doda')): false ;}
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
// Quiz--------------------
let pointsS = 0; // The session points
let pointSession = document.querySelector('.pointSesion')
let pointsT = 0; // The total points
let pointTotal = document.querySelector('.pointTotal')

let pointDisplay = document.querySelector('.pointDisplay')
pointDisplay.innerText = `You have ${pointsT} points`

// Dom Links
let question = document.querySelector("#question")
let questionImage = document.querySelector("#questionImage")
let answers = document.querySelector(".answers")
let typeOfQuestions;
let typeOfAnswers;
// Questions and answers
// Math ---
let mathQuestionObject = {
    0 : ['What is 3 + 4 * 7', 'images/Questions/Math-Question1.png', '31'],
    1 : ['What is 344 - 233', 'images/Questions/Math-Question2.png', '111'],
    2 : ['What is 199 + 999', 'images/Questions/Math-Question3.png', '1198'],
}
let mathAnswerObject = {
    0 : ['32', '55', '78', '31'],
    1 : ['111', '234', '442', '87'],
    2 : ['1345', '1332', '1323', '1198'],
}
function mathQuiz() {
    typeOfQuestions = mathQuestionObject;
    typeOfAnswers = mathAnswerObject;
    questionsFunction(typeOfQuestions)
    pageOne.style.display = 'none'
    coursePage.style.display = 'contents'
}
// Geography ---

// Quiz Logic
let iQ = 0 // Index of the question
function questionsFunction(obj) {
    question.innerText = obj[iQ][0]
    questionImage.src = obj[iQ][1]
    appendAnswers()
}
let answer;
let ans
// Appending the quiz buttons
function appendAnswers() {
    if (remove == true) {
        answer.forEach((x) => {
            x.remove(x)
            x.removeAttribute('class', 'answer')
        })
    }
    for (let i = 0; i < 4; i++) {
        ans = document.createElement('div')
        ans.innerText = 'doda'
        answers.appendChild(ans)
        ans.setAttribute('class', 'answer')
        answer = document.querySelectorAll('.answer')
    }
    answersFunction(typeOfAnswers) 
}
// Removing the quiz buttons
let remove;
// Populating the quiz buttons with answers
let iA = 0 // Index of the answer
function answersFunction(obj) {
    let i = 0
    answer.forEach((x) => {
        x.innerText = obj[iA][i]
        i++
        x.addEventListener('click', () => {
            if (x.innerText === typeOfQuestions[iQ][2]) {
                x.style.backgroundImage = 'none'
                x.style.backgroundColor = 'green'
                iQ++
                iA++
                pointsS += 10;
                if (iQ == Object.keys(mathQuestionObject).length) {
                    setTimeout(() => {
                        quizEnd()
                    }, 600)
                }
                else {
                    setTimeout(() => {
                        remove = true
                        appendAnswers()
                        questionsFunction(typeOfQuestions)
                    }, 500)
                }
            }
            else {
                x.style.backgroundImage = 'none'
                x.style.backgroundColor = 'red'
                iQ++
                iA++
                if (iQ == Object.keys(mathQuestionObject).length) {
                    setTimeout(() => {
                        quizEnd()
                    }, 600)
                }
                else {
                    setTimeout(() => {
                        remove = true
                        appendAnswers()
                        questionsFunction(typeOfQuestions)
                    }, 500)
                }
            }
        })
    })
}
// Ending the quiz
function quizEnd() {
    iQ = 0
    iA = 0
    pointsT += pointsS
    coursePage.style.display = 'none'
    pointPage.style.display = 'contents'
    pointSession.innerText = `You won ${pointsS} points in this round`
    pointTotal.innerText = `In total you have ${pointsT}`
    pointDisplay.innerText = `You have ${pointsT} points`
}
function backButton() {
    pageOne.style.display = 'contents'
    pointPage.style.display = 'none'
    pointsS = 0
}
// Working
