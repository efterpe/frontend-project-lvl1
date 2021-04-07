import engine from '../index.js';
import Random from '../Random.js';

const isCalc = (numb1, numb2, oper) => {
  if (oper === '+') {
    return numb1 + numb2;
  } if (oper === '-') {
    return numb1 - numb2;
  } if (oper === '*') {
    return numb1 * numb2;
  }
};

export const calc = () => {
  const condition = 'What is the result of the expression?';
  const number1 = Random(10);
  const number2 = Random(10);
  const operations = ['+', '-', '*'];
  const j = Random(3);
  const question = number1 + operations[j] + number2;
  const useranswer = readlineSync.question('Your answer: ');
  const answer = isCalc(number1, number2, operation);
};
engine(cals);
