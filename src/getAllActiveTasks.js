const {fetch,chalk,showData,responseHandle,dotEnv,TOKEN} = require("./config");

const getAllActiveTasks = async () => {
  const URL = process.env.URL + `tasks`;
  try {
    const format = [
      "id",
      "project_id",
      "section_id",
      "created",
      "content",
      "description",
    ];
    const tasks = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }).then((res) => {
      responseHandle(res.status);
      return res.json();
    });
    showData(tasks, format);
  } catch (error) {
    console.log(
      chalk.red("invalid command or argument !!Please CHECK and Try Again")
    );
  }
};

module.exports = getAllActiveTasks;
