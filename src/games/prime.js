import readlineSync from 'readline-sync';

const getRandomNumber = (min = 2, max = 100) => (
    Math.floor(Math.random() * (max - min + 1)) + min
);

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
    }
    return true;
};

const runPrimeGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i++) {
        const number = getRandomNumber();
        const correctAnswer = isPrime(number) ? 'yes' : 'no';

        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}!`);
};

export default runPrimeGame;
