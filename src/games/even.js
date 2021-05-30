import engine from '../index.js';
import generateNumber from '../generateNumbers.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const createData = () => {
  const question = generateNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [answer, question];
};
const even = () => engine(condition, createData);

export default even;
