import readlineSync from 'readline-sync';
import { name } from '../cli.js'
import {hello, check, Random} from '../index.js'

export const isGcd = (number1, number2) => {
    while (number1 !== 0 && number2 !== 0) {
        if (number1 > number2) {
        number1 = number1 % number2;
        } else {
            number2 = number2 % number1;
        }
    }
    return number2 + number1;
}

export const gcd = () => {
    hello();
    console.log('Find the greatest common divisor of given numbers.');
    let round = 0;
    while (round < 3) {
    let number1 = Random(100);  
    let number2 = Random(100);  
    console.log('Question: ' + number1 +  ' ' + number2);
      let useranswer = readlineSync.question('Your answer: ');
      if ((check(isGcd(number1, number2), Number(useranswer))) ===  false) {
          break;
          } else {
              round += 1;
          }
      }
         if (round ===3) {
          console.log('Congratulations, ' + name);
         }
      
      };
