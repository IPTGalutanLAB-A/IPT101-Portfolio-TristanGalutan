//studentModule

export const studentDetails = {
name: "Trisan A, Galutan",
id: "2026-6717",
program:"BSIT",
yearlevel:"2nd Year",
schoolyear:"2026-2027",
};

export function printSummary(student,status) {
    return `student: ${student.name} | ID: ${student.id} | program: ${student.program}, | status: ${status}`;

}