
const chalk = require("chalk");
const fetch = require("node-fetch");
require("dotenv").config();
const TOKEN = process.env.TOKEN;

const deleteSpecificTask = async (argv) => {
    
    const URL = process.env.URL + `tasks/${argv.id}`;
    const headers = {
      Authorization: `Bearer ${TOKEN}`,
    };
    try {
      
      await fetch(URL, { method: "DELETE", headers: headers })
      console.log(chalk.blue("task deleted succesfully"));
    } catch (error) {
      console.log(chalk.red(error));
    }
  };
  module.exports=deleteSpecificTask;