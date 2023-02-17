import { msg_y, a_y, addNumbers_y } from './main_y.js';

let msg_x = msg_y
const a_x = a_y
 
function addNumbers_x(a, b){
    return a + b + a_y;
}
 
// Exporting variables and functions
export { msg_x, a_x, addNumbers_x };