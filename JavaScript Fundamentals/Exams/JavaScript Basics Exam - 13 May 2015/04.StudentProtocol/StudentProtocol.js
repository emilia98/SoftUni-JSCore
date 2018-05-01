function printProtocol(arr){
    let examsInfo = {};

    for(let entry of arr){
        let [studentName, examData] = entry.split('-').map(el => el.trim());
        let [exam, score] = examData.split(':').map(el => el.trim());
        score = Number(score);

        if(score < 0 || score > 400){
            continue;
        }
        
        if(!(exam in examsInfo)){
            examsInfo[exam] = [];
        }

       let indexOfStudent = checkIfStudentExists(exam, studentName);

        if(indexOfStudent === -1){
            examsInfo[exam].push({
                name: studentName,
                result: score,
                makeUpExams: 0
            });
        }else{
            let studentInfo = examsInfo[exam][indexOfStudent]
            let prevScore = studentInfo.result;
            studentInfo.result = Math.max(prevScore, score);
            studentInfo.makeUpExams++;
        }
    }

    Object.keys(examsInfo).forEach(exam => {
        return examsInfo[exam].sort((a, b) => {
            if(a.result !== b.result){
                return b.result - a.result
            }

            if(a.makeUpExams !== b.makeUpExams){
                return a.makeUpExams - b.makeUpExams
            }

            if(a.name > b.name){
                return 1;
            }
            if(a.name < b.name){
                return -1;
            }
            return 0
        })
    });

    console.log(JSON.stringify(examsInfo));

    function checkIfStudentExists(exam, studentName){
        let students = examsInfo[exam];
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