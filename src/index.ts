import {logger} from "~helpers/logger";
import {Button} from "~comps/button";


const fn = (a: any) => null;

function timeout(n: number) {
  return new Promise((res) => setTimeout(res, n));
}

export async function addNumbers(a: number, b: number) { // Examples of module types
  await timeout(500);
  return a + b;
}

addNumbers(1, 2).then(r => {
  console.log(r);
});

logger('')
const button = new Button('red');




