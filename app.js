const inquirer = require ('inquirer');
const MenuControllers = require('./controllers/MenuControllers');
 const menu = new MenuControllers();

 menu.clear();
 menu.main();
