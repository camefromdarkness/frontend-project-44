import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 30) => (
    Math.floor(Math.random() * (max - min + 1)) + min
);

const makeProgression = (start, step, length) => {
    return Array.from({ length }, (_, i) => start + i * step);
};

const runProgressionGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');

    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i++) {
        const start = getRandomNumber(1, 20);
        const step = getRandomNumber(2, 10);
        const length = 10; // или можно: getRandomNumber(5, 10)
        const progression = makeProgression(start, step, length);

        const hiddenIndex = getRandomNumber(0, length - 1);
        const correctAnswer = progression[hiddenIndex];
        const questionProgression = progression
            .map((num, idx) => (idx === hiddenIndex ? '..' : num))
            .join(' ');

        console.log(`Question: ${questionProgression}`);
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

export default runProgressionGame;
