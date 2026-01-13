const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateAndParse(input) {
    const parts = input.split(",").map(x => x.trim());
    const grades = [];

    for (let p of parts) {
        const num = Number(p);

        if (!Number.isInteger(num) || num < 1 || num > 6) {
            return null; 
        }

        grades.push(num);
    }

    return grades;
}

rl.question("Podaj oceny (oddzielone przecinkami): ", (answer) => {
    const grades = validateAndParse(answer);

    if (!grades || grades.length === 0) {
        console.log("Błąd: wprowadź liczby całkowite od 1 do 6.");
    } else {
        const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
        console.log("Średnia: " + avg.toFixed(2));
    }

    rl.close();
});