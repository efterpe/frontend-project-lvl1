import readlineSync from 'readline-sync';

export default function engine(task) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  console.log(`Question: ${question}`);

  const useranswer = readlineSync.question('Your answer:');
  let round = 0;

  for (let i = 0; i < 3; i += 1) {
    const game_data = task();
    if (useranswer === answer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${question}.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  } if (round === 3) {
    console.log(`Congratulations, ${name}`);
  }
}
