let sequence = [1, 2]; // Initial numbers

for (let i = 2; i < 12; i++) {
    if (i % 2 === 0) {
        sequence.push(sequence[i - 1] + sequence[i - 2]); // Sum of previous two numbers
    } else {
        sequence.push(sequence[i - 1] * sequence[i - 2]); // Product of previous two numbers
    }
}

sequence.forEach((num, index) => {
    console.log(`Number ${index + 1}: ${num}`);
});
