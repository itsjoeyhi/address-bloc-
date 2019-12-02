const inquirer = require('inquirer');

module.exports = class MenuControllers {
  constructor(){
    this.mainMenuQuestions = [
        {
         type: "list",
          name: "mainMenuChoice",
          message: "Please choose from an option below: ",
          choices: [
            "Add new contact",
            "Get todays date",
            "Exit"
          ]
        }
      ];
      this.contacts = [];
    }

main() {
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
          case "Get todays date":
          this.getDate()
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
          case "Remind Me":
          this.remindMe();
          break;
      }
    })
    .catch((err) => {
      console.log(err);
    });

}
clear() {
    console.log("\x1Bc");
}
addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }
  getDate() {
      var dt = new Date();
      var utcDate = dt.toTimeString();
      console.log(utcDate)
      this.main()
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

getContactCount() {
return this.contacts.length;
}
remindMe() {
   return ('Learning is a life-long pursuit')
}
}
