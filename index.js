require('dotenv').config();
const chalk = require('chalk');
function main(argv){
    if(argv.length){
        console.log(argv);
        const pwd = process.env.PWD;
        const conf = require('lite-migrate.json');
        
    }else{
        console.log(chalk.yellow.bold("\n\tWelcome to ")+chalk.white.bold('lite-migrate')+'\n\n'+
        chalk.green('please run ')+chalk.yellow("lite-migrate")+chalk.white(' --help')+chalk.green(' to learn more'));    
    }
}

module.exports = {main};