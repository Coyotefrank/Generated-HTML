const fs = require("fs");
const inquirer = require("inquirer")

const questions = [
    {
        type: 'input',
        message: 'What is your name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Where are you from',
        name: 'from',
    },
    {
        type: 'input',
        message: 'What is your favorite hobby',
        name: 'hobby',
    },
    {
        type: 'input',
        message: 'What is your favorite food',
        name: 'food',
    },
    {
        type: 'input',
        message: 'Enter your github username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your linkedin URL',
        name: 'linkedin',
    }
]

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => {
        if(err){
            throw err;
        }else {
            console.log("Good job")
        }
    })
}

function init(){
    inquirer.prompt(questions)
    .then((answers) => {
        let htmlData = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>title</title>
        </head>
        <body>
            <h1>Hello my name is ${answers.name}</h1>
            <h2>I am from ${answers.from}</h2>
            <p>Example heading</p>
            <p>My Github username is ${answers.username}</p>
            <p>LinkedIn: ${answers.linkedin}</p>
        </body>
        </html>`;
        writeToFile('index.html', htmlData);
    })
}

init();
