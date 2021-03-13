import readlineSync from 'readline-sync';
import { name } from '../src/cli.js'

 

 export const CreateRandom = () => {
    let arr = [];
    for (let i = 0; i < 3; i +=1) {
      arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
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

const even = () => {
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
export default even();

 


