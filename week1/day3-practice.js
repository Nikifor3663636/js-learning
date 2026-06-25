function multiplicationTable(num){
    let result = ""
    for(let i = 1; i <= 10; i++){
        result += `${num} * ${i} = ${num * i}\n`
    }
    return result;
}
console.log(multiplicationTable(3));