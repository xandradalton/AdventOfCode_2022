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
let itemArray = [];
for (let i = 0; i < data.length; i++) {
    let sackArray = data[i].split("");
    //     console.log(sackArray)
    let half = Math.ceil(sackArray.length / 2);
    let firstHalf = sackArray.splice(0, half);
    let secondHalf = sackArray.splice(-half);
    //     console.log(firstHalf)
    let misItem = 'A';
    for (let i = 0; i < firstHalf.length; i++) {
        for (let j = 0; j < secondHalf.length; j++) {
            if (firstHalf[i] == secondHalf[j]) {
                misItem = firstHalf[i];
                itemArray.push(misItem);
                break;
            }
        }
        if (firstHalf[i] == misItem) {
            break;
        }
    }
}
let alphabetArray = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let priorityScore = 0;
for (let i = 0; i < itemArray.length; i++) {
    for (let j = 0; j < alphabetArray.length; j++) {
        if (itemArray[i] == alphabetArray[j]) {
            priorityScore = alphabetArray.indexOf(alphabetArray[j]) + 1;
            totalPriority += priorityScore;
        }
    }
}
console.log(alphabetArray);
console.log(itemArray);
console.log(totalPriority);
//# sourceMappingURL=index.js.map