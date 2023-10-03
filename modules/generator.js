let generator = (arr, length) => {
    password = []
    for (let i = 0;i < length;i++) {
        password.push(arr[Math.floor((Math.random() * ((arr.length-1) - 0 + 1)) + 0)])
    }
    return password
}

export default generator;