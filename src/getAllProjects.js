const {fetch,chalk,showData,responseHandle,dotEnv,TOKEN} = require("./config");

const getAllProjects = async (argv) => {
  let URL =
    argv.id == undefined
      ? process.env.URL + `projects`
      : process.env.URL + `projects/${argv.id}`;
  try {
    const projects = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }).then((res) => {
      responseHandle(res.status);
      return res.json();
    });
    showData(projects);
  } catch (error) {
    console.log(
      chalk.red("invalid command or argument !!Please CHECK and Try Again")
    );
  }
};

module.exports = getAllProjects;
