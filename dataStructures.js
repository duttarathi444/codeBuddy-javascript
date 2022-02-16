// level {2}

console.log([1, 3, 4, 6, 7, 8].filter(res => ((res % 2) !== 0)));

console.log('Elie'.split('').map(res => {
    if (['a', 'e', 'i', 'o', 'u'].includes(res.toLowerCase()))
        return res.toUpperCase();
    else
        return res;
}).join(''));

console.log(Math.max(...[1, 3, 4, 6, 7, 8, 2, 5]))