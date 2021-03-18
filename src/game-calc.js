import readlineSync from 'readline-sync';
import { name } from '../src/cli.js'
import {hello} from '../bin/brain-games.js'
import { CreateRandom, Random, check } from './game-even.js'

export const isCalc = (number1, number2, operation) => {
    if (operation === '+') {
        return number1 + number2;
    } else
    if (operation === '-') {
        return number1 - number2;
    } else
    if (operation === '*') {
        return number1 * number2;
    }
};

export const calc = () => {
  hello();
  console.log('What is the result of the expression?');
  let numbers1 = CreateRandom();  
  let numbers2 = CreateRandom();  
  let  operations = ['+', '-', '*'];
  for(const i = 0; i < numbers1.length; i += 1) {
    let j = Random(3);
    console.log('Question: ' + numbers1[i] + ' ' + operations[j] +  ' ' + numbers2[i]);
    let useranswer = readlineSync.question('Your answer: ');
    if ((check(isCalc( numbers1[i], numbers2[i], operations[j]) , Number(useranswer))) ===  false) {
        break;
        } 
        console.log('Congratulations, ' + name);
        }
    };
    