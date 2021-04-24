import engine from '../index.js';
import generateNumbers from '../generator.js';

const condition = 'What is the result of the expression?';
const isCalculator = (number1, number2, operation) => {
  if (operation === '+') {
    return (number1 + number2);
  } if (operation === '-') {
    return number1 - number2;
  } if (operation === '*') {
    return number1 * number2;
  }
  throw new Error('error');
};
const calculator = () => {
  const GameData = () => {
    const number1 = generateNumbers(10);
    const number2 = generateNumbers(10);
    const operations = ['+', '-', '*'];
    const j = generateNumbers(3);
    const operation = operations[j];
    const question = `${number1} ${operation} ${number2}`;
    const answer = String(isCalculator(number1, number2, operation));
    return [answer, question];
  };
  engine(condition, GameData);
};
export default calculator;
