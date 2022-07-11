import Employee from './Employee.js'

class Engineer extends Employee {

    constructor(name,id,email,gitHub){
        super(name, id, email)
        this.gitHub = gitHub;
    }
    getGitHub = () => this.gitHub;
    getRole = () => 'Engineer';
}

export default Engineer;