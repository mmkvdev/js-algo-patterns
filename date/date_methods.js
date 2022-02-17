// date methods

const date = new Date();

date.getFullYear();
date.getMonth();
date.getDate();

// returns day of the week - (0(Sunday) - 6(Saturday))
date.getDay();
date.getHours();
date.getMinutes();
date.getSeconds();

// returns milliseconds of a date
date.getMilliseconds();

// returns the number of milliseconds since 1 January, 1970 00:00:00
date.getTime();

// returns the difference between the UTC time and the localtime in minutes
date.getTimezoneOffset();

// returns the date of a date object as a string, using locale conventions
date.toLocaleDateString();

// returns the time of a date object as a string, using locale conventions
date.toLocaleTimeString();


// returns the date object as a string, using locale settings
date.toLocaleString();


// returns the primitive value of a date object as the number of milliseconds since after midnight of January 1, 1970
date.valueOf()
