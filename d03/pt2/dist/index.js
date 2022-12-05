"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const inputFile = process.argv[2];
const rawData = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data = rawData.split('\n');
// console.log(data)
let totalPriority = 0;
let badgeArray = [];
for (let i = 0; i < data.length; i = i + 3) {
    let group = [data[i], data[i + 1], data[i + 2]];
    console.log(group);
    let elf1 = group[0].split('');
    let elf2 = group[1].split('');
    let elf3 = group[2].split('');
    let badge = "a";
    for (let i = 0; i < elf1.length; i++) {
        for (let j = 0; j < elf2.length; j++) {
            for (let k = 0; k < elf3.length; k++) {
                if (elf1[i] == elf2[j] && elf2[j] == elf3[k]) {
                    badge = elf1[i];
                    badgeArray.push(badge);
                    break;
                }
            }
            if (elf1[i] == badge) {
                break;
            }
        }
        if (elf1[i] == badge) {
            break;
        }
    }
}
let alphabetArray = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let priorityScore = 0;
for (let i = 0; i < badgeArray.length; i++) {
    for (let j = 0; j < alphabetArray.length; j++) {
        if (badgeArray[i] == alphabetArray[j]) {
            priorityScore = alphabetArray.indexOf(alphabetArray[j]) + 1;
            totalPriority += priorityScore;
        }
    }
}
console.log(alphabetArray);
console.log(badgeArray);
console.log(totalPriority);
//# sourceMappingURL=index.js.map