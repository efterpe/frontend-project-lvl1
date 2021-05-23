import engine from '../index.js';
import generateNumbers from '../generateNumbers.js';

const condition = 'Find the greatest common divisor of given numbers.';
const gcd = (n1, n2) => {
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
const createData = () => {
  const number1 = generateNumbers();
  const number2 = generateNumbers();
  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));
  return [answer, question];
};
const greatestCommonDivisor = () => engine(condition, createData);

export default greatestCommonDivisor;
