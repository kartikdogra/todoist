const {fetch,chalk,showData,responseHandle,dotEnv,TOKEN} = require("./config");

const closeSpecificTask = async (argv) => {
  const URL = process.env.URL + `tasks/${argv.id}/close`;
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
  };

  try {
    await fetch(URL, { method: "POST", headers: headers }).then((res) => {
      responseHandle(res.status);
    });
  } catch (error) {
    console.log(
      chalk.red("invalid command or argument !!Please CHECK and Try Again")
    );
  }
};

module.exports = closeSpecificTask;
