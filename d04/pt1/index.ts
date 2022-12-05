import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

// console.log(data)
let totalOverlap = 0;

for (let i = 0; i < data.length; i++) {
    let pair: String[] = data[i].split(',')
    let elf1: String[] = pair[0].split('-')
    let elf2: String[] = pair[1].split('-')
    let overlapScore = 0;

    if (elf1[0] >= elf2[0] && elf1[1] <= elf2[1]) {
        overlapScore++
    } else if (elf2[0] >= elf1[0] && elf2[1] <= elf1[1]) {
        overlapScore++
    }

//     console.log(elf1)
//     console.log(elf2)
//     console.log(overlapScore)
    totalOverlap += overlapScore
}

console.log(totalOverlap)
