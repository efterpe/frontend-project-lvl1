import engine from '../index.js';
import generateNumbers from '../generateNumbers.js';

const condition = 'What number is missing in the progression?';

const createNumbers = () => {
  const firstnumber = generateNumbers(1, 100);
  const step = generateNumbers(1, 10);
  const hide = generateNumbers(1, 100);
  let numbers = [];

  for (let i = 1; i <= 20; i += 1) {
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
