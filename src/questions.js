const questions = {
  // reacurring main menu
  menu: [
    {
      type: 'list',
      name: 'mainChoice',
      message: 'Choose what you would like to do next:',
      choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team']
    },
  ],
  addEmployee: function (employeeType) {
    // similar questions across employee type
    const questionBase = [
      {
        type: 'input',
        name: 'name',
        message: `Please enter the name of ${employeeType}`

      },
      {
        type: 'input',
        name: 'id',
        message: `Please enter the ${employeeType} ID:`
      },

      {
        type: 'input',
        name: 'email',
        message: `Please enter the email of the ${employeeType}:`
      }]
      // switch statement to filter out the three specific questions
    switch (employeeType) {
      case "manager":
        questionBase.push({
          type: 'input',
          name: 'officeNumber',
          message: 'Please enter the office number:'
        })
        break
      case "engineer":
       questionBase.push({
          type: 'input',
          name: 'github',
          message: 'Please enter the github username:'
        })
        break
      default:
        questionBase.push({
          type: 'input',
          name: 'school',
          message: 'Please enter the interns school:'
        })
        break
    }
    return questionBase
  }
}

module.exports = questions