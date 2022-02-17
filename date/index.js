// date api


const date = new Date();

// browser's time zone and displays it as a full text string
console.log(date);
// full year of a date
console.log(date.getFullYear());
// month of a date as a number: 0 - 11
console.log(date.getMonth());
// day of a date as a number: 1 - 31
console.log(date.getDate());
console.log(date.getDay());
// hours of a date as a number: 0 - 23
date.getHours();
// minutes of a date as a number: 0 - 59
date.getMinutes();
// seconds of a date as a number: 0 - 59
date.getSeconds();