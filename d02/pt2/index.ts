import * as fs from 'fs';

// A = Rock
// B = Paper
// C = Scissors

// X = Rock
// Y = Paper
// Z = Scissors

// Win = 6
// Lose = 0
// Draw = 3

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

// console.log(data)
let totalScore = 0;

for (let i = 0; i < data.length; i++) {
    let roundArray: String[] = data[i].split(" ");
//     console.log(roundArray)
    let score = 0;
    let me = roundArray[1]
    let them = roundArray[0]

    if (me == "X") {
        score++
        if (them == "A") {
        score = score + 3
        }
        if (them == "B") {
        //lose
        }
        if (them == "C") {
        score = score + 6
        }
    }
    if (me == "Y") {
        score = score + 2
        if (them == "A") {
            score = score + 6
        }
        if (them == "B") {
            score = score + 3
        }
        if (them == "C") {
            //lose
        }
    }
    if (me == "Z") {
        score = score + 3
        if (them == "A") {
            //lose
        }
        if (them == "B") {
            score = score + 6
        }
        if (them == "C") {
            score = score + 3
        }
    }
    totalScore += score
}
console.log(totalScore)