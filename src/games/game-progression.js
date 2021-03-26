import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import { hello, check, Random } from '../index.js';

export const progression = () => {
  hello();
  console.log('What number is missing in the progression?');
  let round = 0;
  while (round < 3) {
    const firstnumber = Random(10);
    const step = Random(10) + 1;
    const hide = Random(9);
    let numbers = [firstnumber];
    let n = 0;
    while (n < 9) {
      numbers.push(numbers[n] + step);
      n += 1;
    }
    const rightanswer = numbers[hide];
    numbers[hide] = '..';
    numbers = numbers.join(' ');
    console.log(`Question: ${numbers}`);
    const useranswer = readlineSync.question('Your answer: ');
    if ((check(rightanswer, Number(useranswer))) === false) {
      break;
    } else {
      round += 1;
    }
  }
  if (round === 3) {
    console.log(`Congratulations, ${name}`);
  }
};
