import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

// console.log(data)

let totalPriority = 0;
let badgeArray: string[] = [];


for (let i = 0; i < data.length; i = i + 3) {
    let group: string[] = [data[i], data[i + 1], data[i + 2]]
    console.log(group)
    let elf1: string[] = group[0].split('')
    let elf2: string[] = group[1].split('')
    let elf3: string[] = group[2].split('')
    let badge: string = "a"

    for (let i = 0; i < elf1.length; i++) {
        for (let j = 0; j < elf2.length; j++) {
            for (let k = 0; k < elf3.length; k++) {
                if(elf1[i] == elf2[j] && elf2[j] == elf3[k]) {
                    badge = elf1[i]
                    badgeArray.push(badge)
                    break
                }
            }
            if(elf1[i] == badge) {
            break
            }
        }
        if(elf1[i] == badge) {
        break
        }
    }
}

let alphabetArray: string[] = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let priorityScore = 0;

for (let i = 0; i < badgeArray.length; i++) {
    for (let j = 0; j < alphabetArray.length; j++) {
        if(badgeArray[i] == alphabetArray[j]) {
            priorityScore = alphabetArray.indexOf(alphabetArray[j]) + 1
            totalPriority += priorityScore
        }
    }
  }

console.log(alphabetArray);
console.log(badgeArray);
console.log(totalPriority);