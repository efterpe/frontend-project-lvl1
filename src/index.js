import { name } from '../src/cli.js'

export const hello = () => {
  console.log('Welcome to the Brain Games!')
  console.log('Hello, ' + name + '!')
}

export const check = (question, answer) => {
  if (question === answer) {
    console.log('Correct!')
    return true
  } else {
    console.log(
      answer + ' is wrong answer ;(. Correct answer was ' + question + '.'
    )
    console.log("Let's try again, " + name)
    return false
  }
}
export const Random = n => {
  return Math.floor(Math.random() * n)
}
