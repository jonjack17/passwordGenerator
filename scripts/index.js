let generateButton = document.getElementById("generate-button")
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
"*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let outputOne = document.getElementById("passwordOne")
let outputTwo = document.getElementById("passwordTwo")

let passwordCharacterIndex = Math.floor(Math.random() * characters.length)
let passwordCharacter = characters[passwordCharacterIndex]

let firstPasswordSelect = document.getElementById("passwordOne")
let secondPasswordSelect = document.getElementById("passwordTwo")

generateButton.addEventListener('click', firstPassword)
generateButton.addEventListener('click', secondPassword)


function firstPassword() {
    outputOne.textContent = " "
    for (let i = 0; i < 15; i ++) {
        let passwordCharacterIndex = Math.floor(Math.random() * characters.length)
        let passwordCharacter = characters[passwordCharacterIndex]
        outputOne.textContent += passwordCharacter 
    }

}


function secondPassword() {
    outputTwo.textContent = " "
    for (let i = 0; i < 15; i ++) {
        let passwordCharacterIndex = Math.floor(Math.random() * characters.length)
        let passwordCharacter = characters[passwordCharacterIndex]
        outputTwo.textContent += passwordCharacter 
    }

}


firstPasswordSelect.addEventListener('click', copyPasswordOne)
secondPasswordSelect.addEventListener('click', copyPasswordTwo)

function copyPasswordOne () {
    navigator.clipboard.writeText(outputOne.textContent)
    .then(function() {
        alert("Copied to clipboard!")
    })
}

function copyPasswordTwo () {
    navigator.clipboard.writeText(outputTwo.textContent)
    .then(function() {
        alert("Copied to clipboard!")
    })
}
