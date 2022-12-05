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
const rawData = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data = rawData.split('\n');
// console.log(data)
let totalScore = 0;
for (let i = 0; i < data.length; i++) {
    let roundArray = data[i].split(" ");
    //     console.log(roundArray)
    let score = 0;
    let me = roundArray[1];
    let them = roundArray[0];
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    let win = 6;
    let draw = 3;
    if (them == "A") {
        //them = rock
        if (me == "X") {
            score = score + scissors;
        }
        if (me == "Y") {
            score = score + rock + draw;
        }
        if (me == "Z") {
            score = score + paper + win;
        }
    }
    if (them == "B") {
        //them = paper
        if (me == "X") {
            score = score + rock;
        }
        if (me == "Y") {
            score = score + paper + draw;
        }
        if (me == "Z") {
            score = score + scissors + win;
        }
    }
    if (them == "C") {
        //them = scissors
        if (me == "X") {
            score = score + paper;
        }
        if (me == "Y") {
            score = score + scissors + draw;
        }
        if (me == "Z") {
            score = score + rock + win;
        }
    }
    totalScore += score;
}
console.log(totalScore);
//# sourceMappingURL=index.js.map