import engine from '../index.js';
import Random from '../Random.js';

const even = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const GameData = () => {
    const question = Random(10);
    const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
    const answer = isEven(question);
    return [answer, question];
  };

  engine(condition, GameData);
};
export default even;
