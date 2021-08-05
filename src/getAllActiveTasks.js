const fetch = require("node-fetch");
const uuid=require("uuid");
const chalk = require("chalk");
const yargs = require("yargs");

// USING URL AND TOKEN FORM .ENV FILE
require("dotenv").config();
const TOKEN = process.env.TOKEN;


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
  
  module.exports=getAllActiveTasks;