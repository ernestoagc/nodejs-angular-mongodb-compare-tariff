 
const platform = process.env.PLATFORM || 'LOCAL'; 
rawConfig  = require('./config.json', 'utf8');
global.config = rawConfig
console.log("Platform = " + platform);   
