import engine from '../index.js';
import generateNumber from '../generateNumbers.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const createData = () => {
  const number = generateNumber(1, 100);
  const question = number;
  const answer = isPrime(question) ? 'yes' : 'no';
  return [answer, question];
};

const prime = () => engine(condition, createData);
export default prime;
