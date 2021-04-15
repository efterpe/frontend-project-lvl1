import engine from '../index.js';
import Random from '../Random.js';

const progression = () => {
  const condition = 'What number is missing in the progression?';
  const GameData = () => {
    const firstnumber = Random(10);
    const step = Random(10) + 1;
    const hide = Random(9);
    let numbers = [firstnumber];
    let n = 0;
    while (n < 9) {
      numbers.push(numbers[n] + step);
      n += 1;
    }
    const answer = String(numbers[hide]);
    numbers[hide] = '..';
    numbers = numbers.join(' ');
    return [answer, numbers];
  };
  engine(condition, GameData);
};
export default progression;
