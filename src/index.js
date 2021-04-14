import readlineSync from 'readline-sync';

export default function engine(condition, task) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(condition);

  let round = 0;

  for (let i = 0; i < 3; i += 1) {
    const v = task();
    const generatedAnswer = v[0];
    const generatedQuestion = v[1];
    console.log(`Question: ${generatedQuestion}`);
    const useranswer = readlineSync.question('Your answer:');
    if (useranswer == generatedAnswer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`${useranswer} is wrong answer ;(. Correct answer was ${generatedAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (round === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
