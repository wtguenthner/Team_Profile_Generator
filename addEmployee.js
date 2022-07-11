import inquirer from "inquirer";
import engineerQuestions from "./lib/engineer.js";
import internQuestions from "./lib/intern.js";
import fs from 'fs'

function addEmployee(obj){

    switch (obj.add) {
        case 'Engineer':
            inquirer.prompt(engineerQuestions)
            
            break;
        case 'Intern':
                inquirer.prompt(internQuestions)
                break;
    
        default:
            break;
    }
}


export default addEmployee