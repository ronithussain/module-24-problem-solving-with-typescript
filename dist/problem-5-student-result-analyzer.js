"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStudentResult(student2) {
    // write your code here
    const { name, marks } = student2;
    // console.log(name, marks);
    const totalMarks = marks.reduce((sum, item) => sum + item);
    // console.log(totalMarks);
    const average = totalMarks / marks.length;
    // console.log(average);
    const result = average >= 40 ? "Passed" : "Failed";
    return { name: student2.name, averageMarks: average, result: result };
}
const student = {
    name: "Rafi",
    marks: [80, 75, 90, 85],
};
console.log(getStudentResult(student));
// Expected output:
// { name: "Rafi", average: 82.5, result: "Passed" }
// another example:
const student2 = {
    name: "Nabil",
    marks: [30, 35, 40, 25],
};
console.log(getStudentResult(student2));
// Expected output:
// { name: "Nabil", average: 32.5, result: "Failed" }
//# sourceMappingURL=problem-5-student-result-analyzer.js.map