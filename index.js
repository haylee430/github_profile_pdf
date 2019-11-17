const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const pdf = require('html-pdf');
const api = require('./api')

const writeFileAsync = util.promisify(fs.writeFile);

const choices = ["Black", "Sea Green","Crimson","Midnight Blue" ]

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
      {
        type: "rawlist",
        name: "color",
        message: "What color do you like?",
        choices: choices,
      },
    ])
    .then(answers => {
      api(answers.github)
      .then(response => {
        console.log(response);
      })
    });

  };

promptUser();