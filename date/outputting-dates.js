// outputting dates

// in general js outputs dates in a full text string format - toString() by default
const date = new Date();

// toUTCString() - converts a date to a UTC string
date.toUTCString();

// toDateString() - converts date to a more readable format
date.toDateString();

// toISOString() - converts a date to a string using the ISO standard
date.toISOString();