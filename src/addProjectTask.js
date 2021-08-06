const {fetch,chalk,showData,responseHandle,dotEnv,TOKEN} = require("./config");

const getAllProjects = async (project_name) => {
  let URL = process.env.URL + `projects`;
  var id = 0;
  try {
    const projects = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }).then((res) => res.json());
    projects.some((project) => {
      if (project.name == project_name) {
        id = project.id;
        return true;
      }
    });
    return id;
  } catch (error) {
    console.log(chalk.red("error in getting projects"));
  }
};

const addProjectTask = async (argv) => {
  const project_id = await getAllProjects(argv.project_name);
  const URL = "https://api.todoist.com/rest/v1/tasks";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  };
  const data = {
    content: `${argv.title}`,
    description: `${argv.description}`,
    due_string: `${argv.time}`,
    project_id: project_id,
  };
  try {
    await fetch(URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    }).then((res) => {
      responseHandle(res.status);
    });
  } catch (error) {
    console.log(
      chalk.red("invalid command or argument !!Please CHECK and Try Again")
    );
  }
};

module.exports = addProjectTask;
