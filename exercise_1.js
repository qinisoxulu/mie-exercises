// Exercise 1 — Student Management System
//
// Create an array called students containing 5 student objects.
//
//     Each student must have:
//
//     name
// age
// mark
// course


let students = [
    { name: "Qiniso Xulu", age: 21, mark: 10, course: "Java" },
    { name: "Peter", age: 22, mark: 99, course: "Azure" },
    { name: "Lethabo", age: 20, mark: 100, course: "Java" },
    { name: "Karabo", age: 23, mark: 65, course: "Technical" },
    { name: "Andile", age: 24, mark: 49, course: "Technical" }
];


function displayStudents() {
    // Display every student's name and mark
    students.map(
        student => (console.log("Name: ", student.name, " Mark: ", student.mark))
    )
}

displayStudents();

function calculateAverage() {
    // Calculate and return the average mark
    let total = 0;
    students.forEach(student => total += student.mark);
    return total / students.length
}

function findTopStudent() {
    // Find and return the student with the highest mark
    let top_mark = 0;
    let top_student = [];

    students.forEach(student => {
        if (student.mark > top_mark) {
            top_mark = student.mark;
            top_student = student;
        }
    });
    return top_student;
}

console.log(findTopStudent());

function findPassedStudents() {
    // Return students who have a mark of 50 or higher
    let passed_students = [];
    students.forEach(student => {
        if (student.mark >= 50) {
            passed_students.push(student)
        }
    });
    return passed_students
}

console.log(findPassedStudents())