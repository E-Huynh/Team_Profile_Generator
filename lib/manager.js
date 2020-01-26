function Manager(name, id, role, office) {
    this.name = name;
    this.id = id;
    this.role = role;
    this.office = office;
}
Manager.prototype.getName = function() {
    return this.name;
}
Manager.prototype.getId = function() {
    return this.id;
}
Manager.prototype.getRole = function() {
    return this.role;
}
Manager.prototype.getOffice = function() {
    return this.office;
}
module.exports = Manager;