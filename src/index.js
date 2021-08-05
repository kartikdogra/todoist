
const yargs = require("yargs");


const getAllProjects =require("./getAllProjects");
const getAllActiveTasks =require("./getAllActiveTasks");
const getSpecificTask = require("./getSpecificTask");
const addtask =require("./addTask");
const closeSpecificTask = require("./closeSpecificTask");
const deleteSpecificTask = require("./deleteSpecificTask");


yargs
.command({command:"ls",describe:"list all the projects",handler:getAllProjects})
.command({command:"ls-active",describe:"list all the active tasks",handler:getAllActiveTasks})
.command({command:"ls-specific",describe:"list details of specific task",builder: {id : {describe: 'task id',demandOption: true,type:'Number'}},handler:getSpecificTask})
.command({command:"task-add",describe:"add/create a task",builder: {title : {describe: 'title',demandOption: true,type:'String'},description: {describe: 'description',demandOption: true,type:'String'},time:{describe: 'time/schedule',demandOption: true,type:'String'}},handler:addtask})
.command({command:"task-close",describe:"close a specific task",builder: {id : {describe: 'task id',demandOption: true,type:'Number'}},handler:closeSpecificTask})
.command({command:"task-delete",describe:"delete a specfic task",builder: {id : {describe: 'task id',demandOption: true,type:'Number'}},handler:deleteSpecificTask})
.argv