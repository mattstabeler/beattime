const beat = require('./beattime');
const time = (process.argv.length > 2) ? new Date(Date.parse(process.argv[2])) : new Date();
console.log(`${time} is ${beat(time)} in beattime`);