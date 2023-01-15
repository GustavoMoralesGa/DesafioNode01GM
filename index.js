const { register, readDates} = require('./operations');

const arguments = process.argv.slice(2);

// Forma 1 de hacerlo (sin structuring)

// const operations = arguments[0];
// const name = arguments[1];
// const age = arguments[2];
// const animal = arguments[3];
// const color = arguments[4];
// const sickness = arguments[5];

// Aplicando structuring

const [operations, name, age, animal, color, sickness] = arguments;

if (operations === "register")  {
  register(name, age, animal, color, sickness)
}
if (operations === "readDates" ) {
readDates()
}
