
const chalk = require("chalk");
const fetch = require("node-fetch");
require("dotenv").config();
const TOKEN = process.env.TOKEN;

const closeSpecificTask = async (argv) => {

    const URL = process.env.URL + `tasks/${argv.id}/close`;
    const headers = {
      Authorization: `Bearer ${TOKEN}`,
    };
  
    try {
      await fetch(URL, { method: "POST", headers: headers })
      console.log(chalk.blue("task closed succesfully"));
      
    } catch (error) {
      console.log(chalk.red(error));
    }
  
  
  };

  module.exports=closeSpecificTask;