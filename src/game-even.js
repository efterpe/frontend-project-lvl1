import readlineSync from 'readline-sync';
import { name } from '../src/cli.js'
import {hello} from '../bin/brain-games.js'

 

export const CreateRandom = () => {
    let arr = [];
    for (let i = 0; i < 3; i +=1) {
      arr[i] = Random(10);
    }
    return arr;
  };

export const Random = (n) => {
  return Math.floor(Math.random() * n);
};

 
export const isEven = (num) => { return num % 2 === 0 ? 'yes' : 'no' ;}


export const check = (question, answer) => {
    if (question === answer) {
         console.log('Correct!');
         return true;
    } else {
     console.log( answer + " is wrong answer ;(. Correct answer was " + question + ".");   
     console.log("Let's try again, " + name);
     return false;
    }
};

export const even = () => {
hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let numbers = CreateRandom();  
  for(let number of numbers) {
    console.log('Question: ' + number);
    let useranswer = readlineSync.question('Your answer:');
     if ((check(isEven(number), useranswer)) == false) {
       break;
      } 
      console.log('Congratulations, ' + name);
     }
};
