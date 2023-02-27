const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template");
const questions = require("./src/questions")
let team = [];

const init = async () => {
  //ask for manager information
  let data = await inquirer.prompt(questions.addEmployee("manager"))
  team.push(new Manager(data.name, data.id, data.email, data.officeNumber))
  menu()
}
const menu = async () => {
  let data = await inquirer.prompt(questions.menu)
  switch (data.mainChoice) {
    case "Add an Engineer":
      addEngineer()
      break;
    case "Add an Intern":
      addIntern()
      break;
    default:
      buildTeam()
      break;
  }
}

const addEngineer = async () => {
  //ask for manager information
  let data = await inquirer.prompt(questions.addEmployee("engineer"))
  team.push(new Engineer(data.name, data.id, data.email, data.github))
  menu()
}

const addIntern = async () => {
  //ask for manager information
  let data = await inquirer.prompt(questions.addEmployee("intern"))
  team.push(new Intern(data.name, data.id, data.email, data.school))
  menu()
}

const buildTeam = async () =>{
  let htmlDoc = render(team)
  await fs.writeFile(outputPath, htmlDoc);
};

init()