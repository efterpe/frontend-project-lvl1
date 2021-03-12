import readlineSync from 'readline-sync';

export const even = () => {
const useranswer = readlineSync.question('Your answer:');
export default isEven = () => {
   let numbers = createrandom();  
   for(let number of numbers) {


















































        
   }
};
   
};
 export const createrandom = () => {
    let arr = [];
    for (let i = 0; i < 3; i +=1) {
      arr[i] = Math.random()*100;
    }
    return arr;
  };

export const even = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    } else {
        return 'no';
    }
};


export const check = (question, answer) => {
    if (question === answer) {
         console.log('Correct!');
    } else {
     console.log( answer + " is wrong answer ;(. Correct answer was " + question + ".");   
     console.log("Let's try again, Bill!");
    }
};






