function checkAge (age){
    if ( age >= 18){
        return "Adult"
    }
    return "Minor"
}
console.log(checkAge(5))
console.log(checkAge(18))
console.log(checkAge(20))