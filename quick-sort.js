export function quickSort(list){
        if (list.length <= 1) return list;

        let left = [];
        let right = [];
        let equal = [];
        let pivot = list[list.length - 1];

        for (let i of list){
            if (i < pivot) left.push(i);
            else if (i > pivot) right.push(i);
            else equal.push(i);
        }

        console.log(`\nPivot: ${pivot}`);
        console.log(`Left list: [ ${left} ]`);
        console.log(`Right list: [ ${right} ]`);
        
        left = quickSort(left);
        right = quickSort(right);

        list.length = 0;
        list.push(...left, ...equal, ...right);

        return list;
}