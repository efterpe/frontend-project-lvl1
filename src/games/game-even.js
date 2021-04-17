import engine from '../index.js';
import generateNumbers from '../generator.js';

const isEven = (number) => number % 2 === 0;

const even = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const GameData = () => {
    const question = generateNumbers(10);
    const answer = isEven(question) ? 'yes' : 'no';
    return [answer, question];
  };

  engine(condition, GameData);
};
export default even;
