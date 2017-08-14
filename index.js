const moment = require('moment');
const log = console.log;
const chalk = require('chalk');


log("It is" + " " + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a.")));
log("It is the" + " " +  chalk.red(moment().format("DDDo")) + " " + "day of the year.");

let hour = moment().format("H") * 3600;
let mnt = moment().format("m") * 60;
let sec = moment().format("s") * 1;


log("It is" + " " + chalk.cyan(sec + mnt + hour) + " " + "seconds into the day." );

if(moment().isDST===true){
    log("It" + " " + chalk.cyan("is") + " " + "during Daylight Savings Time.");
}
    

if(moment().isLeapYear===true){
    log("It" + " " + chalk.red("is not") + " " + "a leap year.");
}
     
