import engine from '../index.js';
import generateNumbers from '../generator.js';

const condition = 'What number is missing in the progression?';

const GameData = () => {
  const firstnumber = generateNumbers(10);
  const step = generateNumbers(10) + 1;
  const hide = generateNumbers(9);
  let numbers = [firstnumber];
  let n = 0;
  while (n < 9) {
    numbers.push(numbers[n] + step);
    n += 1;
  }
  const answer = String(numbers[hide]);
  numbers[hide] = '..';
  numbers = numbers.join(' ');
  const question = numbers;
  return [answer, question];
};
const progression = () => engine(condition, GameData);

export default progression;
