const {fetch,chalk,showData,responseHandle,dotEnv,TOKEN} = require("./config");

const addtask = async (argv) => {
  const URL = process.env.URL + `tasks`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  };
  const data = {
    content: `${argv.title}`,
    description: `${argv.description}`,
    due_string: `${argv.time}`,
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

module.exports = addtask;
