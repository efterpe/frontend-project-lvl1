import engine from '../index.js';
import Random from '../Random.js';

const prime = () => {
  const isPrime = (number) => {
    if (number === 1) {
      return 'yes';
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const GameData = () => {
    const number = Random(10);
    const question = number;
    const answer = isPrime(number);
    return [answer, question];
  };

  engine(condition, GameData);
};
export default prime;
