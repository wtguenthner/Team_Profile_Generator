const managerQuestions = [
{
    type: 'input',
    name: 'name',
    message: 'Team Managers name:'
},
{
    type: 'input',
    name: 'id',
    message: 'Manager ID:'
},
{
    type: 'input',
    name: 'email',
    message: 'Email address:'
},
{
    type: 'input',
    name: 'office',
    message: 'Office number:'
},
{
    type: 'list',
    name: 'add',
    message: 'Add?',
    choices: ['Engineer', 'Intern', 'Finish building my team']
}
];

export default managerQuestions;