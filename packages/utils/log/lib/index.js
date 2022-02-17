'use strict';

const { heading } = require('npmlog');
const log = require('npmlog')

log.level = process.env.LOG_LEVEL?process.env.LOG_LEVEL:'info'; // --debug check options in npmlog core
log.heading = 'colorssk'
log.addLevel('success',2000,{fg:'green',bold:true})

module.exports = log;


