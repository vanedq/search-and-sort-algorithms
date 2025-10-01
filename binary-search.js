export function binarySearch(list, target){
    let first = 0;
    let last = list.length - 1;
    let middle = 0;
    let counter = 0;
    do {
        counter++;
        middle = Math.floor((first + last) / 2);
        console.log(`[Attempt #${counter}] Elements of the subarray:\n` +
            `First: ${list[first]} | Last: ${list[last]} | Middle: ${list[middle]}\n`);
        if (target < list[middle]) last = middle;
        else if (target > list[middle]) first = middle;
        else if (target === list[middle]) console.log(`Target number ${target} found at index ${list.indexOf(target)} on the attempt #${counter}`);
    } while (list[middle] != target)
}