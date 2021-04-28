import engine from '../index.js';
import generateNumbers from '../generator.js';

const condition = 'What is the result of the expression?';
const countNumbers = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'error';
  }
};
const createData = () => {
  const number1 = generateNumbers(10);
  const number2 = generateNumbers(10);
  const operations = ['+', '-', '*'];
  const index = generateNumbers(3);
  const operation = operations[index];
  const question = `${number1} ${operation} ${number2}`;
  const answer = String(countNumbers(number1, number2, operation));
  return [answer, question];
};

const calculator = () => engine(condition, createData);

export default calculator;
