import engine from '../index.js';
import generateNumbers from '../generator.js';

const condition = 'What is the result of the expression?';
const checkCalculator = (number1, number2, operation) => {
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

const calculator = () => {
  const createData = () => {
    const number1 = generateNumbers(10);
    const number2 = generateNumbers(10);
    const operations = ['+', '-', '*'];
    const index = generateNumbers(3);
    const operation = operations[index];
    const question = `${number1} ${operation} ${number2}`;
    const answer = String(checkCalculator(number1, number2, operation));
    return [answer, question];
  };
  engine(condition, createData);
};
export default calculator;
