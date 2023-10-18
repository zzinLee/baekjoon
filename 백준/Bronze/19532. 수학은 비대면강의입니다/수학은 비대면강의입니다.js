const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b, c, d, e, f] = input[0].split(' ').map(Number);
const deno = a * e - b * d;
const numeX = e * c - b * f;
const numeY = a * f - c * d;

log(`${numeX/deno} ${numeY/deno}`);