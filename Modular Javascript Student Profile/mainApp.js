//mainapp.js

import { studentDetails,printSummary } from "./studentModule.js";

const enrollmetMessage = printSummary(studentDetails,"Officially Enrolled");
console.log(enrollmetMessage);