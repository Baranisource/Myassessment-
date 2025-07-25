
function gradeCalculation(score){
    let grade = "Pass";
    switch(true){
        case score>85:
            grade = "A+";
            break;
        case score>95:
            grade = "A++";
            break;
        case score<30:
            grade = "Fail";
            break;

            /* case score>!35:
            grade ="Just Pass"
            break; */

        default : 
            grade = "Pass";
    }
    return grade;
}
console.log(gradeCalculation(60))