export function insertionSort(list){
    for (let i in list){
        let key = list[i];
        let previousIndex = i - 1;
        while (list[previousIndex] > key){
            if (list[i] == key) console.log(`[Index ${i}] Value ${key} < [Index ${previousIndex}] ${list[previousIndex]}!`);
            else console.log(`Value ${key} < [Index ${previousIndex}] ${list[previousIndex]}`)
            console.log(`Value ${list[previousIndex]} [Index ${previousIndex}] → [Index ${previousIndex + 1}]`);
            list[previousIndex + 1] = list[previousIndex];
            previousIndex -= 1;
            console.log(list);
        }

        list[previousIndex + 1] = key;

        if (i == 0) console.log(`[Index ${i}] Value ${list[i]}.`);
        else if (previousIndex >= 0) console.log(`[Index ${previousIndex + 1}] Value ${list[previousIndex + 1]} > [Index ${previousIndex}] Value ${list[previousIndex]}. OK.`);
    }
}