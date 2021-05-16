import readlineSync from 'readline-sync';

export default function engine(condition, getData) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(condition);

  for (let i = 0; i < 3; i += 1) {
    const [generatedAnswer, generatedQuestion] = getData();
    console.log(`Question: ${generatedQuestion}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === generatedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${generatedAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
