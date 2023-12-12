// Flashy animated text at beginning of website
let titleAnchor = document.querySelector("#titleText") 
let headAnchor = document.querySelector("#headText")
let titleText = 'Hello Stranger 👋 and welcome to my quiz'
let headText = 'You can learn 📚 many new things here while also having fun 😎 I hope you enjoy 🤞'
let a = -1
let i = 0
textAnimation(titleAnchor, titleText, titleText.length)
function textAnimation (anchor, text, size) {
    if (size <= i) {
        a++
        i = 0
        turn()
        return
    }
    console.log(size)
    anchor.append(text[i])
    i++
    setTimeout (
        () => {
            textAnimation(anchor, text, size)
        }, 40
    )
}
function turn () {a == 0 ? textAnimation(headAnchor, headText, headText.length) : false ;}