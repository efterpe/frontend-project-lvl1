import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import { hello, check, Random } from '../index.js';

export const CreateRandom = (m, n) => {
  const arr = [];
  for (let i = 0; i < m; i += 1) {
    arr[i] = Random(n);
  }
  return arr;
};

export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const even = () => {
  hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numbers = CreateRandom(3, 10);
  for (const number of numbers) {
    console.log(`Question: ${number}`);
    const useranswer = readlineSync.question('Your answer:');
    if ((check(isEven(number), useranswer)) === false) {
      break;
    }
    console.log(`Congratulations, ${name}`);
  }
};
