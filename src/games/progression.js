import engine from '../index.js';
import generateNumber from '../generateNumbers.js';

const condition = 'What number is missing in the progression?';

const createNumbers = () => {
  const firstnumber = generateNumber(1, 100);
  const step = generateNumber(1, 10);
  const hide = generateNumber(0, 10);
  let numbers = [];

  for (let i = 0; i <= 10; i += 1) {
    numbers.push(firstnumber + (step * i));
  }
  const answer = String(numbers[hide]);
  numbers[hide] = '..';
  numbers = numbers.join(' ');
  const question = numbers;
  return [answer, question];
};
const progression = () => engine(condition, createNumbers);

export default progression;
