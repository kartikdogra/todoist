
const chalk = require("chalk");
const fetch = require("node-fetch");
require("dotenv").config();
const TOKEN = process.env.TOKEN;



const addProjectTask = async (argv) => {

    const URL = "https://api.todoist.com/rest/v1/tasks";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    };
    const data = {
      content: `${argv.title}`,
      description: `${argv.description}`,
      due_string: `${argv.time}`,
      project_id:argv.project_id,

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
            console.log(chalk.blue(`task created succesfully inside project ${argv.project_id}`));
        });
    } catch (error) {
      console.log(chalk.red(error));
    }
  };
  
  module.exports=addProjectTask;