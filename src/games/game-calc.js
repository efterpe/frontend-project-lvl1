import engine from '../index.js';
import Random from '../Random.js';

const calc = () => {
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

  const condition = 'What is the result of the expression?';

  const GameData = () => {
    const number1 = Random(10);
    const number2 = Random(10);
    const operations = ['+', '-', '*'];
    const j = Random(3);
    const operation = operations[j];
    const question = `${number1} ${operation} ${number2}`;
    const answer = String(isCalc(number1, number2, operation));
    return [answer, question];
  };
  engine(condition, GameData);
};
export default calc;
