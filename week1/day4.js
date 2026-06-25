const students = ["Nikita","Sasha","Sophia","Alex","John"]
console.log(`students one:${students[0]}`)
console.log(`students last:${students[students.length - 1]}`)
students.push("Alis");
students.forEach(student => {console.log(student)})