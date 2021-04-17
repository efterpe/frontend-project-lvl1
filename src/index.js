import readlineSync from 'readline-sync';

export default function engine(condition, task) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(condition);

  let round = 0;

  for (let i = 0; i < 3; i += 1) {
    const getData = task();
    const [generatedAnswer, generatedQuestion] = getData;
    console.log(`Question: ${generatedQuestion}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === generatedAnswer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${generatedAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (round === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
