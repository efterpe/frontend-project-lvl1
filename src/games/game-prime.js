import readlineSync from 'readline-sync';
import { name } from '../cli.js'
import {hello, check, Random} from '../index.js'


export const isPrime = (number) => {
    let answer = 'yes';
    for (let i = 2; i < number; i++) {
        if (number % i == 0) { 
            answer = 'no';   
        }
    }
    return answer;
};

export const prime = () => {
    hello();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let round = 0;
    while (round < 3) {
    let number = Random(100)+1;  
    console.log('Question: ' + number);
      let useranswer = readlineSync.question('Your answer: ');
      if ((check(isPrime(number), useranswer)) == false) {
          break;
          } else {
              round += 1;
          }
      }
         if (round === 3) {
          console.log('Congratulations, ' + name);
         }
      
      };
