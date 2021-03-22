import readlineSync from 'readline-sync';
import { name } from '../cli.js'
import {hello, check, Random} from '../index.js'



export const progression = () => {
    hello();
    console.log('What number is missing in the progression?');
    let round = 0;
    while (round < 3) {
    let firstnumber = Random(10);  
    let step = Random(10);
    let hide = Random(9) 
    let numbers = [firstnumber];
    let n = 0;
    while (n < 9) {
        numbers.push(numbers[n] + step);
        n +=1;
    }
    let rightanswer = numbers[hide];
    numbers[hide] = '..'
    console.log('Question: ' + numbers);
      let useranswer = readlineSync.question('Your answer: ');
      if ((check(rightanswer, Number(useranswer))) ===  false) {
          break;
          } else {
              round += 1;
          }
      }
         if (round === 3) {
          console.log('Congratulations, ' + name);
         }
      
      };
