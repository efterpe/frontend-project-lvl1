import readlineSync from 'readline-sync';
import { name } from '../src/cli.js'
import {hello} from '../bin/brain-games.js'
import { CreateRandom, Random, check } from './game-even'

export const isCalc = (number1, number2, oper) => {
    if (oper === '+') {
        return number1 + number2;
    } else
    if (oper === '-') {
        return number1 - number2;
    } else
    if (oper === '*') {
        return number1 - number2;
    }
};

export const calc = () => {
  hello();
  console.log('What is the result of the expression?');
  let numbers1 = CreateRandom();  
  let numbers2 = CreateRandom();  
  let operations = ['+', '-', '*'];
  for(const i = 0; i < 3; i += 1) {
      const j = Random(3);
        console.log('Question: ' + numbers1[i] + j + numbers2[i]);
        let useranswer = readlineSync.question('Your answer:');
         if ((check(isEven(number1[i], number2[i], j), useranswer)) == false) {
           break;
          } 
          console.log('Congratulations, ' + name);
         }
    };
    