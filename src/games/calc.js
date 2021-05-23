import engine from '../index.js';
import generateNumbers from '../generateNumbers.js';

const condition = 'What is the result of the expression?';
const calculateNumbers = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return new Error(`incorrect values '$${number1} ${operation} ${number2}'!`);
  }
};
const createData = () => {
  const number1 = generateNumbers(1, 100);
  const number2 = generateNumbers(1, 100);
  const operations = ['+', '-', '*'];
  const numberOfOperation = 3;
  const index = Math.floor(Math.random() * numberOfOperation);
  const operation = operations[index];
  const question = `${number1} ${operation} ${number2}`;
  const answer = String(calculateNumbers(number1, number2, operation));
  return [answer, question];
};

const calculate = () => engine(condition, createData);

export default calculate;
