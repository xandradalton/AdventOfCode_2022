import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n');

// console.log(data)
let totalPriority = 0;
let itemArray: string[] = [];

for (let i = 0; i < data.length; i++) {
    let sackArray: string[] = data[i].split("");
//     console.log(sackArray)
    let half = Math.ceil(sackArray.length/2);
    let firstHalf = sackArray.splice(0, half);
    let secondHalf = sackArray.splice(-half);
//     console.log(firstHalf)

    let misItem: string = 'A';

    for (let i = 0; i < firstHalf.length; i++) {
        for (let j = 0; j < secondHalf.length; j++) {
            if (firstHalf[i] == secondHalf[j]) {
                misItem = firstHalf[i];
                itemArray.push(misItem)
                break;
            }
        }
        if(firstHalf[i] == misItem) {
            break;
        }
    }
}

let alphabetArray: string[] = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let priorityScore = 0;

  for (let i = 0; i < itemArray.length; i++) {
    for (let j = 0; j < alphabetArray.length; j++) {
        if(itemArray[i] == alphabetArray[j]) {
            priorityScore = alphabetArray.indexOf(alphabetArray[j]) + 1
            totalPriority += priorityScore
        }
    }
  }
// console.log(alphabetArray);
// console.log(itemArray);
console.log(totalPriority);