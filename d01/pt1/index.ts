import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\n\n');

let maxCalories = 0;

for(let i = 0; i < data.length; i++) {
    let elf: string[] = data[i].split("\n");
    console.log(elf);
    let calories = 0;

    for(let i = 0; i < elf.length; i ++) {
        calories = calories + Number(elf[i]);
    }

    if(calories > maxCalories) {
                maxCalories = calories
    }
    console.log(calories);
}
console.log(maxCalories)
