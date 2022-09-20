const invoice = require("./invoices.json");
const plays = require("./plays.json");
const print = require('./print');

console.log(print.statement(invoice, plays));
