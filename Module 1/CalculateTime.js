function sumUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += 1;
    }
    return total;
}

const time1 = performance.now();
sumUpTo(10000000000);
const time2 = performance.now();
console.log(`Time required: ${(time2 - time1) / 1000} seconds.`);

// NOTES with Code Description
/*

#Problem with time
1. Here we faced some issue. Bcz it gives us random execution
time. So this way isn't better. 
2. Different machine will record different times as well as 
same machine will also record different times.
3. For fast algorithms, speed measurements may not be precise
enough.

#Counting Operation

note that: 3 simple operation not dependent on input. Exm is
given below.......... 

{
    function sumUpTo(n) {
        return n * (n+1) /2;
    }
    sumUpTo(10);

    -> This code will be execute with 3 operations but they 
    don't dependent on input!
}

But --- 
{
    function sumUpTo(n) {
        let total = 0;
        for (let i = 1; i <= n; i++) {
            total += 1;
        }
        return total;
    }
    sumUpTo(10);

    -> This code will be execute more than 3 operations and 
    it dependent on input
}

So the conclusion is that, Counting in Hard. Because
i. Depending on what we count, the number of operations can
br vary.
ii. but regardless of the exact number, the number of 
operations grows roughly proportionally with n
iii. If n doubles, then the number of operations will also
roughly double. 


So the relation between input and operation is expressed
by BIG O.

*/