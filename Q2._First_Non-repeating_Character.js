const repeat = (input) => {
    let len = input.length;
    
    for(let i = 0; i < len; i++) {
        let res = true;
        for (let j = i + 1; j < len; j++) {
            if(input[i] === input[j]) {
                res = false;
                break
            }
        }
        if(res) return i
    }
    return -1
}
console.log(repeat("v2tech"))
