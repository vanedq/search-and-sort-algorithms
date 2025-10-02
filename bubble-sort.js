export function bubbleSort(list){
    let swapped;
    let unsortedLength = list.length; //skip comparing already sorted elements at the end of array
    
    do{
        swapped = false;
        let leftElement = 0;
        let rightElement = 1;
        let key = 0;

        while(rightElement < unsortedLength){
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
        unsortedLength--;
    } while (swapped);
    
    return list;
}