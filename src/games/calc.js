import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 50) => (
    Math.floor(Math.random() * (max - min + 1)) + min
);

const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const index = Math.floor(Math.random() * operators.length);
    return operators[index];
};

const calculate = (a, b, operator) => {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            throw new Error(`Unknown operator: ${operator}`);
    }
};

const runCalcGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');

    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i++) {
        const num1 = getRandomNumber();
        const num2 = getRandomNumber();
        const operator = getRandomOperator();
        const question = `${num1} ${operator} ${num2}`;
        const correctAnswer = calculate(num1, num2, operator);

        console.log(`Question: ${question}`);
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

export default runCalcGame;
