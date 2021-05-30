import engine from '../index.js';
import generateNumber from '../generateNumbers.js';

const condition = 'What is the result of the expression?';
const calculateNumber = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return new Error(`incorrect operation ${operation}`);
  }
};
const createData = () => {
  const number1 = generateNumber(1, 100);
  const number2 = generateNumber(1, 100);
  const operations = ['+', '-', '*'];
  const numberOfOperation = operations.length - 1;
  const index = generateNumber(0, numberOfOperation);
  const operation = operations[index];
  const question = `${number1} ${operation} ${number2}`;
  const answer = String(calculateNumber(number1, number2, operation));
  return [answer, question];
};

const calculate = () => engine(condition, createData);

export default calculate;
