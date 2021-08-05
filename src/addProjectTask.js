
const chalk = require("chalk");
const fetch = require("node-fetch");
require("dotenv").config();
const TOKEN = process.env.TOKEN;

const getAllProjects = async (project_name) => {
    let URL=process.env.URL + `projects`
    var k=0;
    try {
      
      const projects =  await fetch(URL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }).then((res) => res.json());
     projects.some(project=>{
          if(project.name==project_name)
          {
              k=project.id;
              return true;
          }
          
      })
    return k;
    }
     catch (error) {
      console.log(chalk.red("error in getting projects"));
    }
  };



const addProjectTask = async (argv) => {
    const project_id=await getAllProjects(argv.project_name);
    const URL = "https://api.todoist.com/rest/v1/tasks";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    };
    const data = {
      content: `${argv.title}`,
      description: `${argv.description}`,
      due_string: `${argv.time}`,
      project_id:project_id,

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
            console.log(chalk.blue(`task created succesfully inside project (${argv.project_name})`));
        });
    } catch (error) {
      console.log(chalk.red(error));
    }
  };
  
  module.exports=addProjectTask;