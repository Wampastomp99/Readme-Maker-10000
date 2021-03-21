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
    {
        type: "input",
        name: "licence",
        message: "What is your licences/badge links?"
    },
    {
        type: "input",
        name: "contributing",
        message: "who contibuted to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "How is this project tested?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
];
