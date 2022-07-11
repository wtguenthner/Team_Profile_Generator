import inquirer from "inquirer";
import questions from './src/questions.js';
import Manager from './lib/Manager.js'
import Engineer from "./lib/engineer.js";
import Intern from "./lib/intern.js";
import genHTML from "./src/genHTML.js"

const roles = {Managers:[],Engineers:[],Interns:[]};

const init = () => {
    inquirer.prompt(questions).then(ans => {
        if(!ans.needEmp) return genHTML(roles);

        ans.position == 'Manager'
        ? roles.Managers.push(new Manager(ans.name,ans.id,ans.email,ans.officeNumber))
        : ans.position == 'Engineer'
        ? roles.Engineers.push(new Engineer(ans.name,ans.id,ans.email,ans.gitHub))
        : roles.Interns.push(new Intern(ans.name,ans.id,ans.email,ans.school))
        
        init();
    })

    
};

init();

export default roles;