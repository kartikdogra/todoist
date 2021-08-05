
const chalk = require("chalk");
const fetch = require("node-fetch");
require("dotenv").config();
const TOKEN = process.env.TOKEN;


const getAllProjects = async (argv) => {
    let URL=argv.id==undefined?process.env.URL + `projects`:process.env.URL + `projects/${argv.id}`;
    try {
      
      const projects = await fetch(URL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }).then((res) => res.json());
      console.table(projects);
    } catch (error) {
      console.log(chalk.red(error));
    }
  };

module.exports=getAllProjects;