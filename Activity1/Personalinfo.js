const personalinfo = {
    name: "Tristan A. Galutan",
    IdNum: "2026-6717",
    Yearlevel: "II",
    Program: "Information Technology",
};

const courses = [
    { subject: "application development", grade: 90 },
    { subject: "integrative programming", grade: 90 },
    { subject: "art appreciation", grade: 90 },
    { subject: "event-driven programming", grade: 90 },
    { subject: "networking 1", grade: 90 },
    { subject: "science technology", grade: 90 },
    { subject: "pathFit4", grade: 90 },
];

const total = courses[0].grade + courses[1].grade + courses[2].grade + courses[3].grade + courses[4].grade + courses[5].grade + courses[6].grade;
const gwa = total / courses.length;
let letterGrade = "";

if (gwa >= 98 && gwa <= 100) {
    letterGrade = "A";
} else if (gwa >= 94 && gwa < 98) {
    letterGrade = "A-";
} else if (gwa >= 90 && gwa < 94) {
    letterGrade = "B+";
} else if (gwa >= 87 && gwa < 90) {
    letterGrade = "B";
} else if (gwa >= 83 && gwa < 87) {
    letterGrade = "B-";
} else if (gwa >= 80 && gwa < 83) {
    letterGrade = "C";
} else if (gwa >= 77 && gwa < 80) {
    letterGrade = "C-";
} else {
    letterGrade = "F";
}

console.log("Name: " + personalinfo.name);
console.log("ID Number: " + personalinfo.IdNum);
console.log("Program: " + personalinfo.Program + " - Year " + personalinfo.Yearlevel);
console.log("GWA: " + gwa);
console.log("Letter Grade: " + letterGrade);

console.log("=====COURSE ENROLLED=====");
console.log(courses[0].subject);
console.log(courses[1].subject);
console.log(courses[2].subject);
console.log(courses[3].subject);
console.log(courses[4].subject);
console.log(courses[5].subject);
console.log(courses[6].subject);