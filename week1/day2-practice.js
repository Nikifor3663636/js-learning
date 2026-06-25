/*
Создай файл day2-practice.js в папке week1 и напиши функцию gradeScore которая:

Принимает параметр score (число от 0 до 100)
Возвращает оценку по такой логике:

90 и выше → "A"
75 и выше → "B"
60 и выше → "C"
ниже 60 → "F"


Вызови с разными числами:
 */
function  gradeScore(score){
   if(score >= 90){
       return "A"
   }
   else if(score >= 75){
       return "B"
   }
   else if(score >= 60){
       return "C"
   }
   else{
       return "F"
   }

}
console.log(gradeScore(50))
console.log(gradeScore(60))
console.log(gradeScore(75))
console.log(gradeScore(90))
