class Includes {
    constructor(arr) {
        this.switch = false
        this.arr = arr
    }
    get switch (){
        return this.switch
    }
    get arr(){
        return this.arr
    }
    set switch(newValue){
        this.switch = newValue
    }
}
const upperCaseAlphabet = new Includes(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
const lowerCaseAlphabet = new Includes(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
const nums = new Includes ([1,2,3,4,5,6,7,8,9,10]);
const specialCharacters = new Includes(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', "'", '"', ',', '.', '/', '<', '>', '?']);