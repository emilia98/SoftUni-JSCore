function printProtocol(arr){
    let examsInfo = new Map();

    for(let entry of arr){
        let [studentName, examData] = entry.split(/\s*-\s*/).map(el => el.trim());
        let [exam, score] = examData.split(/\s*:\s*/).map(el => el.trim());
        score = Number(score);

        if(score < 0 || score > 400){
            continue;
        }
        
        if(!examsInfo.has(exam)){
            examsInfo.set(exam, []);
        }

       let indexOfStudent = checkIfStudentExists(exam, studentName);
        if(indexOfStudent === -1){
            examsInfo.get(exam).push({
                name: studentName,
                result: score,
                makeUpExams: 0
            });
        }else{
            let studentInfo = examsInfo.get(exam)[indexOfStudent];
            let prevScore = studentInfo.result;
            studentInfo.result = Math.max(prevScore, score);
            studentInfo.makeUpExams++;
        }
    }

    let sortedData = {};
    [...examsInfo.entries()].forEach(data => {
        let exam = data[0];
        let students = data[1].sort((a, b) => {
            if(a.result !== b.result){
                return b.result - a.result
            }

            if(a.makeUpExams !== b.makeUpExams){
                return a.makeUpExams - b.makeUpExams
            }

            return a.name.localeCompare(b);
        })
        sortedData[exam] = students.slice(0);
    });

    console.log(JSON.stringify(sortedData));

    function checkIfStudentExists(exam, studentName){
        let students = examsInfo.get(exam);
        let indexOfStudent = -1;

        for(let index = 0; index < students.length; index++){
            if(students[index].name === studentName){
                indexOfStudent = index;
                break;
            }
        }
        return indexOfStudent;
    }
}

/* Uncomment to test:
printProtocol([
    "Peter Jackson - Java : 350", 
    "Jane - JavaScript : 200", 
    "Jane     -    JavaScript :     400", 
    "Simon Cowell - PHP : 100", 
    "Simon Cowell-PHP: 500", 
    "Simon Cowell - PHP : 200"
]);

printProtocol([
    "Simon Cowell - PHP : 100",
    "Simon Cowell-PHP: 500",
    "Peter Jackson - PHP: 350",
    "Simon Cowell - PHP : 400"
]);

printProtocol([
    "Simon Cowell - PHP : 100",
    "Simon Cowell-PHP: 500",
    "Peter Jackson - PHP: 350",
    "Simon Cowell - PHP : 400",
    "Simo Cowell - PHP: 340",
    "Simo Cowell- PHP: 400"
]);
*/