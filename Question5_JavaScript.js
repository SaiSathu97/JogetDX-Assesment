let randomNumbers = [];

for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 1000) + 1);
}

randomNumbers.forEach((num, index) => {
    console.log(`Number ${index + 1}: ${num}`);
});

let sum = randomNumbers.reduce((acc, num) => acc + num, 0);
console.log(`Sum of the array: ${sum}`);
