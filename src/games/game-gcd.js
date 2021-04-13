import engine from '../index.js';
import Random from '../Random.js';

const gcd = () => {
  const isGcd = (numb1, numb2) => {
    while (numb1 !== 0 && numb2 !== 0) {
      if (numb1 > numb2) {
        numb1 %= numb2;
      } else {
        numb2 %= numb1;
      }
    }
    return numb2 + numb1;
  };
  const condition = 'Find the greatest common divisor of given numbers.';
  const GameData = () => {
    const number1 = Random(10);
    const number2 = Random(10);
    const question = `${number1} ${number2}`;
    const answer = isGcd(number1, number2);
    return [answer, question];
  };
  engine(condition, GameData);
};
export default gcd;
