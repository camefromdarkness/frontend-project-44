#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => num % 2 === 0;

const rounds = 3;

for (let i = 0; i < rounds; i++) {
    const question = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        process.exit(1);
    } else {
        console.log('Correct!');
    }
}

console.log(`Congratulations, ${userName}!`);
