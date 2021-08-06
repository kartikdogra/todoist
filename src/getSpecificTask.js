const {fetch,chalk,showData,responseHandle,dotEnv,TOKEN} = require("./config");

const getSpecificTask = async (argv) => {
  const URL = process.env.URL + `tasks/${argv.id}`;
  try {
    const tasks = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }).then((res) => {
      responseHandle(res.status);
      return res.json();
    });
    showData(tasks);
  } catch (error) {
    console.log(
      chalk.red("invalid command or argument !!Please CHECK and Try Again")
    );
  }
};
module.exports = getSpecificTask;
