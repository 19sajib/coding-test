const repeat = (input) => {
    for(let i = 0; i < input.length; i++){
        let curr = input[i]
        for(let j = i+1; j < input.length; j++){
            if (input[j] === curr) return curr
        }
    }
    return -1
}
console.log(repeat("xyzzoy"))
