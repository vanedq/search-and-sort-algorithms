export function linearSearch(list, target){
    for (let i in list){
        console.log(`[${i}] ${list[i]}`);
        if (list[i] == target){
            console.log(`Target number ${target} found at index ${i}.`);
            break;
        };
    };
}