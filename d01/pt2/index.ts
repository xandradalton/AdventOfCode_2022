import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n\n');

let elfCalories: number[] = [];

for(let i = 0; i < data.length; i++) {
    let elf: string[] = data[i].split("\n");
    let calories = 0;

    for(let i = 0; i < elf.length; i ++) {
        calories = calories + Number(elf[i]);
    }
    elfCalories.push(calories);
}
let elfCaloriesSorted: number[] = elfCalories.sort((n1, n2) => n2 - n1);
let calorieSum = elfCaloriesSorted.slice(0, 3).reduce((a, b) => a + b, 0);

console.log(calorieSum)

