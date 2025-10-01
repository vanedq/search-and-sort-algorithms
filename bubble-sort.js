export function bubbleSort(list){
    let swapped;
    do{
        swapped = false;
        let leftElement = 0;
        let rightElement = 1;
        let key = 0;

        while(leftElement < list.length){
            key = list[leftElement];
            if (list[leftElement] > list[rightElement]){
                list[leftElement] = list[rightElement];
                list[rightElement] = key;
                swapped = true;
                console.log(`Swapped values ${list[leftElement]} and ${list[rightElement]} at index ${leftElement} and ${rightElement}: [ ${list} ] `);
            }
            leftElement++;
            rightElement++;
        }
    } while (swapped);
    return list;
}