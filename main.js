import generator from "./modules/generator.js"

//Classses
class arrIncludes {
    constructor(arr) {
        this._arr = arr
    }
    get arr(){
        return this.arr
    }
}

const upperCaseAlphabet = new arrIncludes(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
const lowerCaseAlphabet = new arrIncludes(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
const numbers = new arrIncludes ([1,2,3,4,5,6,7,8,9,10]);
const specialCharacters = new arrIncludes(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', "'", '"', ',', '.', '/', '<', '>', '?']);

const upperCaseAlphabetCheckbox = document.getElementById("upperCase")
const lowerCaseAlphabetCheckbox = document.getElementById("lowerCase")
const numbersCheckbox = document.getElementById("numbers")
const specialCharactersCheckbox = document.getElementById("specialCharacters")
const length = document.getElementById("length")
const generatorButton = document.getElementById("generator")
const generatedPassword = document.getElementById("generatedPassword")

let passArr = []

const passwordArr = () => {
    if (upperCaseAlphabetCheckbox.checked) {
        passArr.push(upperCaseAlphabet.arr)
    }
    if (lowerCaseAlphabetCheckbox.checked) {
        passArr.push(lowerCaseAlphabet.arr)
    }
    if (numbersCheckbox.checked) {
        passArr.push(numbers.arr)
    }
    if (specialCharactersCheckbox.checked) {
        passArr.push(specialCharacters.arr)
    }
}

generatorButton.onclick = generatedPassword.value = generator(passwordArr(),length);

