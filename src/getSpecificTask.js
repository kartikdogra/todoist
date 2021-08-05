
const chalk = require("chalk");
const fetch = require("node-fetch");
require("dotenv").config();
const TOKEN = process.env.TOKEN;

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
      console.log(chalk.red(error));
    }
  };
  module.exports=getSpecificTask;