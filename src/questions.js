const questions = [

    {
        type: 'confirm',
        name: 'needEmp',
        message: 'Would you like to add an employee?'
    },
    {
        type: 'list',
        name: 'position',
        message: 'Which position would you like to fill?',
        choices: ['Manager','Engineer', 'Intern'],
        when: ({needEmp}) => needEmp
    },
    {
        type: 'input',
        name: 'name',
        message: 'Name:',
        when: ({needEmp}) => needEmp
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID:',
        when: ({needEmp}) => needEmp
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:',
        when: ({needEmp}) => needEmp
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'Office number:',
        when: ({position}) => position == 'Manager'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'GitHub:',
        when: ({position}) => position == 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: 'School:',
        when: ({position}) => position == 'Intern'
    }
];

export default questions;