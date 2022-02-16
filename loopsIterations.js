// level {2}

const num = 6;

let n1 = 1, n2 = 1, next, fibonacci = [];
for (let i = 1; i <= num; i++) {
    fibonacci.push(n1)
    next = n1 + n2;
    n1 = n2;
    n2 = next
}
console.log(fibonacci.join(' '));
console.log(fibonacci.reduce((pre, curr) => pre + curr))