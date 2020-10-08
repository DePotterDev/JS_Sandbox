let val;

const today = new Date();
let birthday = new Date('9-10-1988 11:25:20');
birthday = new Date('November 28 1988');
birthday = new Date('09/11/1980');

// val = today.toString();
val = today;
// val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDate();
val = today.getFullYear();
val = today. getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(10);
birthday.setDate(28);
birthday.setFullYear(1987);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);


console.log(birthday);