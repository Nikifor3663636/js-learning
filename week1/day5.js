const student = {
    name:"Nikita",
    age:18,
    city: "Odesa",
    isStudent: true,
    courses:["JS-Array","JS-Object","JS-Loops"],
    greet (){
        return `My name is ${this.name},my age is ${this.age}!`
    },
    introduce() {
      return `I live in ${this.city},I'm  student ${this.isStudent}!\nI am also studying three courses ${this.courses.join(",")}`
    }
}
console.log(student.greet())
console.log(student.introduce())