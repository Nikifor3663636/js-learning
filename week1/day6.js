const students = [
    { name: "Nikita", grade: 95 },
    { name: "Sasha", grade: 72 },
    { name: "Alex", grade: 88 },
    { name: "John", grade: 55 },
    { name: "Olga", grade: 91 }
]

const studentNames = students.map(student => student.name)
console.log(studentNames)

const topStudents =  students.filter(student => student.grade > 80)
console.log(topStudents)

const avgGrade = students.reduce((acc,student) => acc + student.grade, 0)/ students.length
console.log(avgGrade)
