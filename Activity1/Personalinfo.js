const personalinfo = {
   name: "Tristan A. Galutan",
   IdNum: "2026-6717",
   Yearlevel: "II",
   Program: "Information Technology",
};

const grades = {
    subjects: ["application development", "integrative programming", "art appreciation", "event-driven programming", "networking 1" ,"science technology " , "pathFit4"],
    grades: [90,90,90,90,90,90,90]
};

const total = grades.grades[0] + grades.grades[1] + grades.grades[2] + grades.grades[3] + grades.grades[4] + grades.grades[5] + grades.grades[6];
const gwa = total / grades.grades.length;
let letterGrade = "";

if (gwa >= 98) {
    letterGrade = "A";
} else if (gwa >= 94) {
    letterGrade = "A-";
}else if (gwa >=90){
    letterGrade = "B+";
} else if (gwa >= 87) {
    letterGrade = "B";
} else if (gwa >= 83) {
    letterGrade = "B-";
} else if (gwa >= 80) {
    letterGrade = "C";
} else if (gwa>= 77){
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
console.log(grades.subjects[0]);
console.log(grades.subjects[1]);
console.log(grades.subjects[2]);
console.log(grades.subjects[3]);
console.log(grades.subjects[4]);
console.log(grades.subjects[5]);
console.log(grades.subjects[6]);
