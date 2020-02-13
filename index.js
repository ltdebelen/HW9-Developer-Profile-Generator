const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username"
    },
    {
      type: "list",
      message: "What is your favorite color?",
      name: "color",
      choices: ["green", "blue", "pink", "red"]
    }
  ])
  .then(function(response) {
    console.log(response);
  });
