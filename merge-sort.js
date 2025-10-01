let lvlCounter = 0;

export function mergeSort(list){
    if (list.length === 1) return list;

    let middle = Math.floor(list.length / 2);
    let left = list.slice(0, middle);
    let right = list.slice(middle);
    
    console.log(`[Lvl ${lvlCounter}] Left list: ${left} | Right list: ${right}`);
    
    lvlCounter++;
    left = mergeSort(left);
    right = mergeSort(right);
    lvlCounter--;

    let pointerL = 0;
    let pointerR = 0;
    let mergedList = [];

    while (pointerL < left.length || pointerR < right.length){ //while there's still values in some of the halves
        if (pointerL >= left.length){ //if there's nothing else on left list, merge the resting values of right list
            mergedList.push(right[pointerR++]);
            console.log(`[Lvl ${lvlCounter}] Pushed resting value. Result: ${mergedList}`); 
        }
        else if (pointerR >= right.length){ //if there's nothing else on right list, merge the resting values of left list
            mergedList.push(left[pointerL++]); 
            console.log(`[Lvl ${lvlCounter}] Pushed resting value. Result: ${mergedList}`);
        } 
        //if there's values in both halves, keep comparing and merging ascendingly
        else {
            mergedList.push(
                left[pointerL] <= right[pointerR]
                ? left[pointerL++]
                : right[pointerR++]);
            console.log(`[Lvl ${lvlCounter}] Pushed smaller value of comparison. Result: ${mergedList}`);
        }
    }
    
    for (let i = 0; i < mergedList.length; i++) {
        list[i] = mergedList[i];
    }

    return list;
    
}