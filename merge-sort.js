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

    let indexL = 0;
    let indexR = 0;
    let mergedList = [];

    while (indexL < left.length || indexR < right.length){ //while there's still values in some of the halves
        if (indexL >= left.length){ //if there's nothing else on left list, merge the resting values of right list
            mergedList.push(right[indexR++]);
            console.log(`[Lvl ${lvlCounter}] Pushed resting value. Result: ${mergedList}`); 
        }
        else if (indexR >= right.length){ //if there's nothing else on right list, merge the resting values of left list
            mergedList.push(left[indexL++]); 
            console.log(`[Lvl ${lvlCounter}] Pushed resting value. Result: ${mergedList}`);
        } 
        //if there's values in both halves, keep comparing and merging ascendingly
        else {
            mergedList.push(
                left[indexL] <= right[indexR]
                ? left[indexL++]
                : right[indexR++]);
            console.log(`[Lvl ${lvlCounter}] Pushed smaller value of comparison. Result: ${mergedList}`);
        }
    }
    
    //populate the list with the result
    for (let i = 0; i < mergedList.length; i++) {
        list[i] = mergedList[i];
    }

    return list;
    
}