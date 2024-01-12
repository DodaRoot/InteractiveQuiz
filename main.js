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
let questions = document.querySelector('.questions')
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
    3 : ['What is 67 * 2 - 3', 'images/Questions/Math-Question4.png', '131'],
    4 : ['What is 987 - 23', 'images/Questions/Math-Question5.png', '964'],
}
let mathAnswerObject = {
    0 : ['32', '55', '78', '31'],
    1 : ['111', '234', '442', '87'],
    2 : ['1345', '1332', '1323', '1198'],
    3 : ['120', '100', '131', '63'],
    4 : ['234', '964', '980', '951'],
}
function mathQuiz() {
    questions.style.backgroundImage = 'url(images/math.jpg)';
    typeOfQuestions = mathQuestionObject;
    typeOfAnswers = mathAnswerObject;
    questionsFunction(typeOfQuestions)
    pageOne.style.display = 'none'
    coursePage.style.display = 'contents'
}
// Geography ---
let geoQuestionObject = {
    0 : ['What country has this flag', 'images/Questions/Geo-Question1.png', 'Italy'],
    1 : ['Who does this map belong to', 'images/Questions/Geo-Question2.png', 'Albania'],
    2 : ['What country has this flag', 'images/Questions/Geo-Question3.png', 'Germany'],
    3 : ['Who does this map belong to', 'images/Questions/Geo-Question4.png', 'America'],
    4 : ['What country has this flag', 'images/Questions/Geo-Question5.png', 'Switzerland'],
}
let geoAnswerObject = {
    0 : ['Hungary', 'Italy', 'Ireland', 'USA'],
    1 : ['Italy', 'Israel', 'Albania', 'Bosnia'],
    2 : ['Germany', 'Sweden', 'Ireland', 'Denmark'],
    3 : ['Holland', 'Germany', 'Bosnia', 'America'],
    4 : ['Germany', 'Switzerland', 'Austria', 'Holland'],
}
function geoQuiz() {
    questions.style.backgroundImage = 'url(images/geo.jpg)';
    typeOfQuestions = geoQuestionObject;
    typeOfAnswers = geoAnswerObject;
    questionsFunction(typeOfQuestions)
    pageOne.style.display = 'none'
    coursePage.style.display = 'contents'
}
// History quiz
let histQuestionObject = {
    0 : ['When did Skenderbe die', 'images/Questions/Hist-Question1.png', '1468'],
    1 : ['Who was Kosovas first president', 'images/Questions/Hist-Question2.png', 'Ibrahim Rugova'],
    2 : ['Who was Enver Hoxha', 'images/Questions/Hist-Question3.png', 'Dictator'],
    3 : ['Who was Julius Caesar', 'images/Questions/Hist-Question4.png', 'Emperor of Rome'],
    4 : ['Who built the colosseum', 'images/Questions/Hist-Question5.png', 'Romans'],
}
let histAnswerObject = {
    0 : ['1398', '1508', '1468', '1434'],
    1 : ['Ibrahim Rugova', 'Hashim Thaqi', 'Albin Kurti', 'Edi Rama'],
    2 : ['President', 'King', 'Waiter', 'Dictator'],
    3 : ['Emperor of Rome', 'Priest', 'Slave', 'Soldier'],
    4 : ['Germans', 'Romans', 'Albanians', 'Italians'],
}
function histQuiz() {
    questions.style.backgroundImage = 'url(images/hist.jpg)';
    typeOfQuestions = histQuestionObject;
    typeOfAnswers = histAnswerObject;
    questionsFunction(typeOfQuestions)
    pageOne.style.display = 'none'
    coursePage.style.display = 'contents'
}
// Biology Quiz
let bioQuestionObject = {
    0 : ['What is the natural compound present in green plants that gives them their colour?', 'images/Questions/Bio-Question1.png', 'Chlorophyll'],
    1 : ['Where would one find the smallest bone in the human body?', 'images/Questions/Bio-Question2.png', 'The ear'],
    2 : ['What is the biggest animal on the planet?', 'images/Questions/Bio-Question3.png', 'The Blue Whale'],
    3 : ['What is the largest bone in the human body?', 'images/Questions/Bio-Question4.png', 'Femur'],
    4 : ['What is the process called when a caterpillar develops into a butterfly?', 'images/Questions/Bio-Question5.png', 'Metamorphosis'],
}
let bioAnswerObject = {
    0 : ['Dodush', 'Chlorine', 'Chlorophyll', 'Basiliosin'],
    1 : ['The ear', 'The brain', 'The legs', 'The hands'],
    2 : ['Giraffe', 'Brontosaurus', 'Elephant', 'The Blue Whale'],
    3 : ['Felin', 'Femur', 'Fllamaster', 'Klorine'],
    4 : ['Metamorphosis', 'Fotosineza', 'FotoTeTezja', 'Chlorine'],
}
function bioQuiz() {
    questions.style.backgroundImage = 'url(images/bio.png)';
    typeOfQuestions = bioQuestionObject;
    typeOfAnswers = bioAnswerObject;
    questionsFunction(typeOfQuestions)
    pageOne.style.display = 'none'
    coursePage.style.display = 'contents'
}
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
    pointTotal.innerText = `In total you have ${pointsT} points`
    pointDisplay.innerText = `You have ${pointsT} points`
}
function backButton() {
    pageOne.style.display = 'contents'
    pointPage.style.display = 'none'
    pointsS = 0
}
