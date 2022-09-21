import statement from "./statement.mjs";
import fs from "fs";

const invoice = JSON.parse(fs.readFileSync('./invoices.json', 'utf8'));
const plays = JSON.parse(fs.readFileSync('./plays.json', 'utf8'));

console.log(statement(invoice, plays));
