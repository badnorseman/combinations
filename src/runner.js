// Example: node runner.js elements=2 set="abcdefghijklmn".
const combinations = require("./combinations");

let elements;
let set;

const args = process.argv.slice(2);

args.forEach(arg => {
  const index = arg.indexOf("=");
  const key = arg.slice(0, index);
  const value = arg.slice(index + 1);

  if (key === "elements") {
    elements = value;
  }
  if (key === "set") {
    if (isNaN(value)) {
      set = Array.from(value);
    } else {
      set = Array.from(value, d => Number(d));
    }
  }
});

if (set && elements) {
  const results = combinations(set, elements);

  console.log("****************************************");
  console.log("elements: ", elements);
  console.log("set: ", set);
  console.log("number of combinations: ", results.length);
  console.log("****************************************");
} else {
  console.log("****************************************");
  console.log("parameters set and elements are required");
  console.log("****************************************");
}
