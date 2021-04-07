import engine from '../index.js';
import Random from '../Random.js';

const even = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const GameData = () => {
    const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
    const question = Random(10);
    const answer = isEven(question);
    return [answer, question];
  };

  engine(GameData);
};
export default even;
