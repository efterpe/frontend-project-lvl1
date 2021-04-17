import engine from '../index.js';
import generateNumbers from '../generator.js';

const isGcd = (n1, n2) => {
  let numb1 = n1;
  let numb2 = n2;
  while (numb1 !== 0 && numb2 !== 0) {
    if (numb1 > numb2) {
      numb1 %= numb2;
    } else {
      numb2 %= numb1;
    }
  }
  return (numb2 + numb1);
};
const gcd = () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  const GameData = () => {
    const number1 = generateNumbers(10);
    const number2 = generateNumbers(10);
    const question = `${number1} ${number2}`;
    const answer = String(isGcd(number1, number2));
    return [answer, question];
  };
  engine(condition, GameData);
};
export default gcd;
