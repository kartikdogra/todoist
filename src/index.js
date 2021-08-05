const fetch = require("node-fetch");
const uuid=require("uuid");
const chalk = require("chalk");
const yargs = require("yargs");

// USING URL AND TOKEN FORM .ENV FILE
require("dotenv").config();
const TOKEN = process.env.TOKEN;

yargs.command({
  command : 'add',
  describe: "Adding a Note",
  handler : function() {
      console.log("Adding a New Note!");
  }
})



const getAllProjects = async () => {
  const URL = process.env.URL + `projects`;
  try {
    
    const projects = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }).then((res) => res.json());
    console.table(projects);
  } catch (error) {
    console.log(chalk.red("error occurred"));
  }
};


const getAllActiveTasks = async () => {
  const URL = process.env.URL + `tasks`;
  try {
    
    const tasks = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }).then((res) => res.json());
    console.table(tasks);
  } catch (error) {
    console.log(chalk.red("error occurred"));
  }
};

const getSpecificTask = async (argv) => {
  const URL = process.env.URL + `tasks/${argv.id}`;
  try {
    const tasks = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }).then((res) => res.json());
    console.table(tasks);
    
  } catch (error) {
    console.log(chalk.red("error occurred"));
  }
};
//ADD A FUNCTION

const addtask = async (argv) => {

  const URL = process.env.URL + `tasks`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  };
  const data = {
    content: `${argv.title}`,
    description: `${argv.description}`,
    due_string: `${argv.time}`,
  };
  try {
    
    await fetch(URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("created succesfully");
      });
  } catch (error) {
    console.log(chalk.red("error occurred"));
  }
};


// CLOSING THE TASK
const closeSpecificTask = async (argv) => {

  const URL = process.env.URL + `tasks/${argv.id}/close`;
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
  };

  try {
    await fetch(URL, { method: "POST", headers: headers })
       console.log("closed task succesfully");
    
  } catch (error) {
    console.log(chalk.red("error occurred"));
  }


};

const deleteSpecificTask = async (argv) => {

  const URL = process.env.URL + `tasks/${argv.id}`;
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
  };
  try {
    
    await fetch(URL, { method: "DELETE", headers: headers })
    console.log("task deleted succesfully");
  } catch (error) {
    console.log(chalk.red("error occurred"));
  }
};

yargs
.command({command:"ls",describe:"list all the projects",handler:getAllProjects})
.command({command:"ls-active",describe:"list all the active tasks",handler:getAllActiveTasks})
.command({command:"ls-specific",describe:"list details of specific task",builder: {id : {describe: 'task id',demandOption: true,type:'Number'}},handler:getSpecificTask})
.command({command:"task-add",describe:"add/create a task",builder: {title : {describe: 'title',demandOption: true,type:'String'},description: {describe: 'description',demandOption: true,type:'String'},time:{describe: 'time/schedule',demandOption: true,type:'String'}},handler:addtask})
.command({command:"task-close",describe:"close a specific task",builder: {id : {describe: 'task id',demandOption: true,type:'Number'}},handler:closeSpecificTask})
.command({command:"task-delete",describe:"delete a specfic task",builder: {id : {describe: 'task id',demandOption: true,type:'Number'}},handler:deleteSpecificTask}).argv



/*let command=yargs.argv._[0];
   
if(command===`ls`)
{  
   getAllProjects();
}
else if(command===`ls-active`)
{
   getAllActiveTasks();
}
else if(command===`ls-specific`)s
{  
   getSpecificTask(yargs.argv.id);
}
else if(command===`task-add`)
{
   addtask(yargs.argv);
}
else if(command===`task-close`)
{
   closeSpecificTask(yargs.argv);
}
else if(command===`task-delete`)
{
   deleteSpecificTask(yargs.argv);
}
else{
  console.log(chalk.red("no command found"));
}
*/
