function printStudentsInfo(arr){
    arr = arr.filter(el => el !== "");
    let coursesData = {};

    for(let entry of arr){
        // This ---> entry.split(" | ") <--- won't work
        let [student, course, grade, visits] = entry.split("|").map(el => el.trim());
        [grade, visits] = [grade, visits].map(el => Number(el));

        if(!(course in coursesData)){
            coursesData[course] = {
                avgGrade: 0,
                avgVisits: 0,
                students: [],
                sumGrades: 0,
                sumVisits: 0,
                dataAdded: 0,
            };
        }

        if(coursesData[course].students.indexOf(student) === -1){
            coursesData[course].students.push(student);
        }

        coursesData[course].sumGrades += grade;
        coursesData[course].sumVisits += visits;
        coursesData[course].dataAdded++;
    }

    for(let courseName in coursesData){
        let course = coursesData[courseName];
        coursesData[courseName].avgGrade = calcAverage(course, "sumGrades");
        coursesData[courseName].avgVisits = calcAverage(course, "sumVisits");
        delete course.sumGrades;
        delete course.sumVisits;
        delete course.dataAdded;
    }

    let sortedData = {};
    for(let course of Object.keys(coursesData).sort()){
        sortedData[course] = {
            avgGrade: coursesData[course].avgGrade,
            avgVisits: coursesData[course].avgVisits,
            students: coursesData[course].students.sort(),
        };
    }

    console.log(JSON.stringify(sortedData));

    function calcAverage(course, prop){
        return Math.round( (course[prop] / course.dataAdded) * 100) / 100;
    }
}

/* Uncomment to test:
printStudentsInfo([
    "Peter Nikolov | PHP  | 5.50 | 8",
    "Maria Ivanova | Java | 5.83 | 7",
    "Ivan Petrov   | PHP  | 3.00 | 2",
    "Ivan Petrov   | C#   | 3.00 | 2",
    "Peter Nikolov | C#   | 5.50 | 8",
    "Maria Ivanova | C#   | 5.83 | 7",
    "Ivan Petrov   | C#   | 4.12 | 5",
    "Ivan Petrov   | PHP  | 3.10 | 2",
    "Peter Nikolov | Java | 6.00 | 9",
    ""
]);
*/