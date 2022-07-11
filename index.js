import inquirer from "inquirer";
import managerQuestions from './lib/manager.js'
import addEmployee from './addEmployee.js'

inquirer.prompt(managerQuestions).then(addEmployee)