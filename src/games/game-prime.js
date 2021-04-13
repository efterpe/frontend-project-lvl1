import engine from '../index.js';
import Random from '../Random.js';

const prime = () => {
  const isPrime = (number) => {
    let answer = 'yes';
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        answer = 'no';
      }
    }
    return answer;
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
