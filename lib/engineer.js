function Engineer(name, id, role, username) {
    this.name = name;
    this.id = id;
    this.role = role;
    this.username = username;
}
Engineer.prototype.getName = function() {
    return this.name;
}
Engineer.prototype.getId = function() {
    return this.id;
}
Engineer.prototype.getRole = function() {
    return this.role;
}
Engineer.prototype.getGithub = function() {
    return this.username;
}
module.exports = Engineer;