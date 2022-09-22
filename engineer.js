const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        github = this.github;
    };
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;