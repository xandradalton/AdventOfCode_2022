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
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    let win = 6;
    let draw = 3;

    if (them == "A") {
        //them = rock
        if (me == "X") {
            score = score + scissors
        }
        if (me == "Y") {
            score = score + rock + draw
        }
        if (me == "Z") {
            score = score + paper + win
        }
    }
    if (them == "B") {
        //them = paper
        if (me == "X") {
            score = score + rock
        }
        if (me == "Y") {
            score = score + paper + draw
        }
        if (me == "Z") {
            score = score + scissors + win
        }
    }
    if (them == "C") {
        //them = scissors
        if (me == "X") {
            score = score + paper
        }
        if (me == "Y") {
            score = score + scissors + draw
        }
        if (me == "Z") {
            score = score + rock + win
        }
    }
    totalScore += score
}
console.log(totalScore)