
const chalk = require("chalk");
const fetch = require("node-fetch");
require("dotenv").config();
const TOKEN = process.env.TOKEN;


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

module.exports=getAllProjects;