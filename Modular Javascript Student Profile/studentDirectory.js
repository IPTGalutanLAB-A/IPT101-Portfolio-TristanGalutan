// StudentDirectory.js

const studentRecord = {
    name: "Tristan A. Galutan",
    id: "2026-6717",
    program: "BSIT",
    yearlevel: "2nd Year",
    schoolYear: "2026-2027",

    getEnrollmentDetails(semester,campus) {
        return `[${this.schoolYear} | ${semester}] Student ${this.name} (ID: ${this.id} from ${this.program} (${this.yearlevel}) is registerd at ${campus}.`;
    
    }

};

console.log(studentRecord.getEnrollmentDetails("1st Semester", "Main Campus"));