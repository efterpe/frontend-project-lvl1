import engine from '../index.js';
import generateNumbers from '../generator.js';

const condition = 'Find the greatest common divisor of given numbers.';
const isgreatestCommonDivisor = (n1, n2) => {
  let number1 = n1;
  let number2 = n2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return (number2 + number1);
};
const greatestCommonDivisor = () => {
  const GameData = () => {
    const number1 = generateNumbers(10);
    const number2 = generateNumbers(10);
    const question = `${number1} ${number2}`;
    const answer = String(isgreatestCommonDivisor(number1, number2));
    return [answer, question];
  };
  engine(condition, GameData);
};
export default greatestCommonDivisor;
