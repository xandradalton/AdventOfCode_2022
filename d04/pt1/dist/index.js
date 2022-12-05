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
let totalOverlap = 0;
for (let i = 0; i < data.length; i++) {
    let pair = data[i].split(',');
    let elf1 = pair[0].split('-');
    let elf2 = pair[1].split('-');
    let overlapScore = 0;
    if (elf1[0] >= elf2[0] && elf1[1] <= elf2[1]) {
        overlapScore++;
    }
    else if (elf2[0] >= elf1[0] && elf2[1] <= elf1[1]) {
        overlapScore++;
    }
    else if (elf2[0] == elf1[0] && elf2[1] == elf1[1]) {
        overlapScore++;
    }
    //     console.log(elf1)
    //     console.log(elf2)
    //     console.log(overlapScore)
    totalOverlap += overlapScore;
}
console.log(totalOverlap);
//# sourceMappingURL=index.js.map