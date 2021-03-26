import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import { hello, check, Random } from '../index.js';

export const isCalc = (number1, number2, operation) => {
  if (operation === '+') {
    return number1 + number2;
  } if (operation === '-') {
    return number1 - number2;
  } if (operation === '*') {
    return number1 * number2;
  }
};

export const calc = () => {
  hello();
  console.log('What is the result of the expression?');
  let round = 0;
  while (round < 3) {
    const number1 = Random(10);
    const number2 = Random(10);
    const operations = ['+', '-', '*'];
    const j = Random(3);
    console.log(`Question: ${number1} ${operations[j]} ${number2}`);
    const useranswer = readlineSync.question('Your answer: ');
    if ((check(isCalc(number1, number2, operations[j]), Number(useranswer))) === false) {
      break;
    } else {
      round += 1;
    }
  }
  if (round === 3) {
    console.log(`Congratulations, ${name}`);
  }
};
