const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your projects title?"
    },
    {
        type: "input",
        name: "badge",
        message: "What badge links do you want?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your projects description?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are your installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "What is your projects usage?"
    },
]