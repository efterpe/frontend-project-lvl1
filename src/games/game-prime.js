import engine from '../index.js';
import generateNumbers from '../generator.js';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const prime = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const GameData = () => {
    const number = generateNumbers(10);
    const question = number;
    const answer = isPrime(number);
    return [answer, question];
  };

  engine(condition, GameData);
};
export default prime;
