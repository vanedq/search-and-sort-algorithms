import readline from 'readline';
import { linearSearch } from './linear-search.js';
import { binarySearch } from './binary-search.js';
import { insertionSort } from './insertion-sort.js';
import { mergeSort } from './merge-sort.js';
import { bubbleSort } from './bubble-sort.js';
import { quickSort } from './quick-sort.js';

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

function askForNumber(list, f) {
    return new Promise((resolve) => {
        let question;
        
        if (f === createArrayByInput) question = "Choose the length of the array you'll create (up to 100):\n";
        else question = "Pick a number between 1 and 100 for the algorithm to search:\n";

        rl.question(question, (answer) => {
            if (!/^\d+$/.test(answer) || answer < 1 || answer > 100) {
                console.log("Invalid.");
                resolve(askForNumber(list, f));
            } else {
                let chosenNumber = parseInt(answer, 10);
                resolve(f(list, chosenNumber));
            }
        });
    });
}

// Creating an array with 100 unique random elements from 1 to 100
function createDisorderedArray(list){
    while (list.length < 100){
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        if (list.indexOf(randomNumber) === -1) list.push(randomNumber);
    }
}

// Creating an ordered array from 1 to 100
function createOrderedArray(list){
    while (list.length < 100) list.push(list.length + 1);
}

function waitForResponse(list){
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

async function createArrayByInput(list, number){
    while (list.length < number){
        let arrayValue = await new Promise(resolve => {
            rl.question(`Enter the value for the index #${list.length + 1}:\n`, resolve);
        });

        if (!/^\d+$/.test(arrayValue) || arrayValue < 1 || arrayValue > 100) {
            console.log("Invalid.");
            continue;
        }
        
        list.push(parseInt(arrayValue, 10));

        console.log(list);
    }    
}

function cleanArray(list){
    list.length = 0;
}

function askForOperation(){
    return new Promise((resolve) => {
        rl.question(`\nChoose an algorithm to run:
1- Linear Search
2- Binary Search
3- Insertion Sort
4- Merge Sort
5- Bubble Sort
6- Quick Sort
0- Exit\n`, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    let list = [];
    let answer;
    do{
        answer = await askForOperation();
        switch (answer){
            case '1':
                console.log("LINEAR SEARCH");
                createDisorderedArray(list);
                console.log(list);
                await askForNumber(list, linearSearch);
                cleanArray(list);
                break;
            case '2':
                console.log("BINARY SEARCH");
                createOrderedArray(list);
                console.log(list);
                await askForNumber(list, binarySearch);
                cleanArray(list);
                break;
            case '3':
                console.log("INSERTION SORT");
                await askForNumber(list, createArrayByInput);
                insertionSort(list);
                console.log(list);
                cleanArray(list);
                break;
            case '4':
                console.log("MERGE SORT");
                await askForNumber(list, createArrayByInput);
                mergeSort(list);
                console.log(list);
                cleanArray(list);
                break;
            case '5':
                console.log("BUBBLE SORT");
                await askForNumber(list, createArrayByInput);
                bubbleSort(list);
                console.log(list);
                cleanArray(list);
                break;
            case '6':
                console.log("QUICK SORT");
                await askForNumber(list, createArrayByInput);
                quickSort(list);
                console.log(list);
                cleanArray(list);
            }
    } while (answer != 0);      
    if (answer = '0') process.exit(); 
}

main();