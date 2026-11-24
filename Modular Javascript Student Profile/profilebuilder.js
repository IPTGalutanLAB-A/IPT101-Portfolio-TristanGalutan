// profileBuilder.js

function createStudentProfile(name,id,program,yearlevel,schoolyear) {
    return {
        name: name,
        id: id,
        program: program,
        yearlevel: yearlevel,
        schoolyear: schoolyear
    };
}

const myProfile = createStudentProfile(
  "Tristan A. Galutan",
  "2026-6717",
    "BSIT",
    "2nd Year",
    "2026-2027"  
);

console.log(myProfile);
