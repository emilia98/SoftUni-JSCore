function printStudentsInfo(arr){
    arr = arr.filter(el => el !== "");
    let coursesData = new Map();
    let dateAddedInfo = new Map();

    for(let entry of arr) {
        let tokens = entry.split(/\s*\|\s*/g).map(el => el.trim());
        let student = tokens[0];
        let course = tokens[1];
        let grade = Number(tokens[2]);
        let visits = Number(tokens[3]);

        if(coursesData.get(course) === undefined){
            coursesData.set(course,{
                avgGrade: 0,
                avgVisits: 0,
                students: []
            });
        }

        if( !(coursesData.get(course).students.includes(student))){
            coursesData.get(course).students.push(student);
        }

        if(dateAddedInfo.get(course) === undefined){
            dateAddedInfo.set(course, 0);
        }

        let updatedValue = dateAddedInfo.get(course) + 1;
        dateAddedInfo.set(course, updatedValue);

        coursesData.get(course).avgGrade = calcAverage(coursesData.get(course).avgGrade, grade, updatedValue);
        coursesData.get(course).avgVisits = calcAverage(coursesData.get(course).avgVisits, visits, updatedValue);
    }

    let sortedObj = {};
    let sortedKeys = [...coursesData.entries()].map(el => el[0]).sort();
    //let sortedKeys = Array.from(coursesData.keys()).sort();

    for(let course of sortedKeys){
        let courseInfo = coursesData.get(course);

        sortedObj[course] = {
            avgGrade: Math.round(courseInfo.avgGrade * 100) / 100,
            avgVisits: Math.round(courseInfo.avgVisits * 100) / 100,
            students: courseInfo.students.sort(),
        };
    }

    console.log(JSON.stringify(sortedObj));

    function calcAverage(oldData, newEntry, entriesCount){
        let newData = (oldData * (entriesCount - 1) + newEntry) / entriesCount;
        return newData;
    }
}

/*
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