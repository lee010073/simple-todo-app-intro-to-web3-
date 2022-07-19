const Migrations = artifacts.require("Migrations");
const TodoList = artifacts.require("ToDoList");
module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(TodoList);
};
