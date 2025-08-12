// object destructure

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructer: "Shiv"
}

// console.log(course.courseInstructer);

const {courseInstructer: intx} = course
console.log(intx);
