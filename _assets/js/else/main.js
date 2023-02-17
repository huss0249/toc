let msg = "Hello World!";
const PI = 3.14; 
 
function addNumbers(a, b){
    return a + b;
}
 
// Exporting variables and functions
export { msg, PI, addNumbers };


//globalThis.reuse_dev = (logType, message, str) => {

//export function add (a, b) {
//  return a + b;
//}

export const add = (a, b) => {
  return a + b;
}

//export {add};

//export default function multiply (a, b) {
//  return a * b;
//}
//
//export function bbbb (a, b) {
//  return a * b;
//}

export const multiply = (a, b) => {
  return a * b;
}

export const bbbb = (a, b) => {
  return a * b;
}

