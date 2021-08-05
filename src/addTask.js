
const chalk = require("chalk");
const fetch = require("node-fetch");
require("dotenv").config();
const TOKEN = process.env.TOKEN;

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
            console.log(chalk.blue("task created succesfully"));
        });
    } catch (error) {
      console.log(chalk.red("error occurred"));
    }
  };
  
  module.exports=addtask;