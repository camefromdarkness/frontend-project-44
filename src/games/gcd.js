import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 100) => (
    Math.floor(Math.random() * (max - min + 1)) + min
);

const gcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const runGcdGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');

    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i++) {
        const num1 = getRandomNumber();
        const num2 = getRandomNumber();
        const correctAnswer = gcd(num1, num2);

        console.log(`Question: ${num1} ${num2}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (Number(userAnswer) !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}!`);
};

export default runGcdGame;
