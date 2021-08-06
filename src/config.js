var k={

    chalk : require("chalk"),
    fetch : require("node-fetch"),
    responseHandle : require("./responseHandler"),
    dotEnv:require("dotenv").config(),
    TOKEN : process.env.TOKEN,
    showData:require("./showData"),
    yargs: require("yargs"),

}

module.exports=k;