const {fetch,chalk,showData,responseHandle,dotEnv,TOKEN} = require("./config");

const deleteSpecificTask = async (argv) => {
  const URL = process.env.URL + `tasks/${argv.id}`;
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
  };
  try {
    await fetch(URL, { method: "DELETE", headers: headers }).then((res) => {
      responseHandle(res.status);
    });
  } catch (error) {
    console.log(
      chalk.red("invalid command or argument !!Please CHECK and Try Again")
    );
  }
};
module.exports = deleteSpecificTask;
