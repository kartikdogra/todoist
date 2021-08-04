const fetch = require("node-fetch");
const uuid=require("uuid");
const chalk = require("chalk");
const yargs = require("yargs");

// USING URL AND TOKEN FORM .ENV FILE
require("dotenv").config();
const TOKEN = process.env.TOKEN;

const getAllProjects = async () => {
  const URL = process.env.URL + `projects`;
  const projects = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((res) => res.json());
  console.table(projects);
};

const getAllActiveTasks = async () => {
  const URL = process.env.URL + `tasks`;
  const tasks = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((res) => res.json());
  console.table(tasks);
};

const getSpecificTask = async (task_id) => {
  const URL = process.env.URL + `tasks/${task_id}`;
  const tasks = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((res) => res.json());
  console.table(tasks);
};
//ADD A FUNCTION
const addtask = async (argv) => {
  const URL = process.env.URL + `tasks`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  };
  const data = {
    content: `${argv.content}`,
    description: `${argv.description}`,
    due_string: `${argv.time}`,
  };

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
};


// CLOSING THE TASK
const closeSpecificTask = async (argv) => {
  const URL = process.env.URL + `tasks/${argv.id}/close`;
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
  };

  await fetch(URL, { method: "POST", headers: headers })
      console.log("closed task succesfully");
};

const deleteSpecificTask = async (argv) => {
  const URL = process.env.URL + `tasks/${argv.id}`;
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
  };

  await fetch(URL, { method: "DELETE", headers: headers })
      console.log("task deleted succesfully");
};



const argv = require("yargs").argv;
yargs
  .command("ls", "list all the projects", getAllProjects)
  .command("ls-active","list all the active tasks in a project",getAllActiveTasks)
  .command("ls-specific","list specific tasks in a project",getSpecificTask(argv.id))
  .command("task-add", "add a task", addtask(argv))
  .command("task-close", "close a specific task", closeSpecificTask(argv))
  .command("task-delete", "close a specific task", deleteSpecificTask(argv))

  .help().argv;
