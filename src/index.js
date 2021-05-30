import readlineSync from 'readline-sync';

const round = 3;
export default function engine(condition, getData) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  for (let i = 0; i < round; i += 1) {
    const [generatedAnswer, generatedQuestion] = getData();
    console.log(`Question: ${generatedQuestion}`);
    const userAnswer = readlineSync.question('Your answer:');

    if (userAnswer !== generatedAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${generatedAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
