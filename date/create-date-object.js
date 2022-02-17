// creating a date object

// we can create a new date object using a `new Date() constructor` in 4 ways

// new Date() - creates a date object with current date and time.
const date  = new Date();

// Note: date objects are static


// new Date(year, month, day, hour, minutes, seconds, millisecond) - creates a date object with specified date and time
const dateNew = new Date(2018, 11, 02, 12, 30, 35, 59);

// if only one argument is supplied to new Date() constructor, it'll be treated as milliseconds - new Date(2000);
console.log(dateNew);


// new Date(dateString) - creates a new date object from a date string
const dateString = new Date("January 15, 2022 13:39:21:45");
console.log(dateString);


// Javascripts store date as milliseconds - getTime()

// new Date(milliseconds) - creates a new date object as zero time plus milliseconds
const dateInMilliSeconds = new Date(2000);