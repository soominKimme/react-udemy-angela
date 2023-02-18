///////////////////////////////////////////////////////
// 403. Javascript ES6 - Import, Export and Modules

const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

//THERE IS ONLY ONE DEFAULT EXPORT PER FILE.
export default pi;

//If you want to import more than one thing => {a, b}
export { doublePi, triplePi };
