
const chalk = require("chalk");
const fetch = require("node-fetch");
require("dotenv").config();
const TOKEN = process.env.TOKEN;

const createProject = async (argv) => {

    const URL = process.env.URL + `projects`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    };
    const data = {
      name: `${argv.name}`,
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
            console.log(chalk.blue("project created succesfully"));
        });
    } catch (error) {
      console.log(chalk.red(error));
    }
  };
  
  module.exports=createProject;