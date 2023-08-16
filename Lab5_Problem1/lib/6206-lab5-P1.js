function positiveNum(){
    do {
        let number = prompt("Enter a positive integer");
        let n = Number(number);
    
        if (isNaN(n) || n <= 0 || !Number.isInteger(n)){
            continue;
        }
        return n
    } while (true);
}

function showPrimes(n) {
    let prime = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            prime.push(i);
        }
    }
    return prime;
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n) ; i++) {
        if (n % i == 0) 
        return false;
    }
    return true;
}

let num = positiveNum();
let prime = showPrimes(num);
alert (`For n = ${num} prime numbers are: ${prime.join(', ')}`);