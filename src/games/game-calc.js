import engine from '../index.js';
import generateNumbers from '../generator.js';

const isCalc = (numb1, numb2, oper) => {
  if (oper === '+') {
    return (numb1 + numb2);
  } if (oper === '-') {
    return numb1 - numb2;
  } if (oper === '*') {
    return numb1 * numb2;
  }
  throw new Error('error');
};

const calculator = () => {
  const condition = 'What is the result of the expression?';

  const GameData = () => {
    const number1 = generateNumbers(10);
    const number2 = generateNumbers(10);
    const operations = ['+', '-', '*'];
    const j = generateNumbers(3);
    const operation = operations[j];
    const question = `${number1} ${operation} ${number2}`;
    const answer = String(isCalc(number1, number2, operation));
    return [answer, question];
  };
  engine(condition, GameData);
};
export default calculator;
