/*
Цикл который выводит числа от 1 до 10
Цикл который выводит только чётные числа от 1 до 20
 */
function number(){
    for (let i = 1; i <= 10; i++){
        process.stdout.write(i + " ")
    }
}
function evenNumbers(){
    for (let i = 1; i <= 20; i++){
        if (i % 2 === 0) {
            process.stdout.write(i + " ")
        }
    }
}

number();
console.log(" ");
evenNumbers();