function divisibleBy(arr,a){
    let b =[];
    for (let i of arr){
        if (i%a==0) b.push(i);
    }
    return b;
}

console.log(divisibleBy([1,2,3,4,5,6,7,8,9,10],2));