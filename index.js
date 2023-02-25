const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template");

// prompt questions

let team = [];

async function questions(){
  let data = await inquirer.prompt([
    {
    type: 'list',
    name: 'role',
    message: "Please select your position",
    choices: ["Manager", "Engineer", "Intern"]
},
{
type: "input",
name: "officeNumber",
message: "Enter your office number:",
when(answers){
  return answers.role === "Manager";
}
},


])

}

questions();

let htmlDoc = render(team)

  await fs.writeFile(outputPath, htmlDoc);



// TODO: Write Code to gather information about the development team members, and render the HTML file.
// testing code


// startProgram();
// async function startProgram(){

//   const manager = new Manager("Jakeness", 798, "me@me.com", 9);
//   team.push(manager);

//   const engineer = new Engineer("Ben", 83983, "pardon@gmail.com", "Sophie-senge");
//   team.push(engineer);

//   const intern = new Intern("Senge", 83893, "cheesy@chees.conm", "Columbia");
//   team.push(intern);

  
//   let htmlDoc = render(team)

//   await fs.writeFile(outputPath, htmlDoc);

// }


