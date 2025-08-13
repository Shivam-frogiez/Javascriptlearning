// object destructure

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructer: "Shiv"
}

// console.log(course.courseInstructer);

const {courseInstructer: intx} = course //this is called object de-structuring
console.log(intx);


// json format
// json format - keys are also enclosed inside quotaion mark
// {
//     "name": "sam",
//     "class": "VIII",
//     "subject": "PCM"
// }

// // json format may be an object as above or may be an array as below

// [
//     {},
//     {},
//     {}
// ]

// We can use api to call json file and can understand api json file with json formatter->styleNBeatuify->