import engine from '../index.js';
import generateNumbers from '../generator.js';

const condition = 'What is the result of the expression?';
const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Error');
  }
};
const createData = () => {
  const number1 = generateNumbers();
  const number2 = generateNumbers();
  const operations = ['+', '-', '*'];
  const numberOfOperation = 3;
  const index = generateNumbers(numberOfOperation);
  const operation = operations[index];
  const question = `${number1} ${operation} ${number2}`;
  const answer = String(calculate(number1, number2, operation));
  return [answer, question];
};

const calculator = () => engine(condition, createData);

export default calculator;
