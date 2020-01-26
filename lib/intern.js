function Intern(name, id, role, school) {
    this.name = name;
    this.id = id;
    this.role = role;
    this.school = school;
}
Intern.prototype.getName = function() {
    return this.name;
}
Intern.prototype.getId = function() {
    return this.id;
}
Intern.prototype.getRole = function() {
    return this.role;
}
Intern.prototype.getSchool = function() {
    return this.school;
}
module.exports = Intern;