let a = Number(process.argv[2]);
let b = Number(process.argv[3]);

const colors = require("colors/safe");

if (isNaN(a) || isNaN(b)) {
    return console.log(colors.red("Вы ввели не число!"))
}
if (a < 0 || b < 0) {
    return console.log(colors.red("Вы ввели число меньше 0!"))
}
if (a === b) {
    if (prostoe(a)) {
        return console.log(colors.yellow("Вы ввели диапазон из одного числа! Это число простое: ", а))
    }
    return console.log(colors.red("Вы ввели диапазон из одного числа! Это число не простое!"))
}
let n = 1;
if (a < b) {
    for (let i = a; i <= b; i++) {
        if (prostoe(i)) {
            printProstoe(n, i);
            n++;
        }
    }
} else {
    for (let i = b; i <= a; i++) {
        if (prostoe(i)) {
            printProstoe(n, i);
            n++;
        }
    }
}
if (n == 1) console.log(colors.yellow("В заданном диапазаоне нет простых чисел."));


function prostoe(n) {
    if (n == 1)
        return false;
    for (let d = 2; d * d <= n; d++) {
        if (n % d === 0)
            return false;
    }
    return true;
}

function printProstoe(n, m) {
    switch (n % 3) {
        case 1: return console.log(colors.green(m));
        case 2: return console.log(colors.yellow(m));
        case 0: return console.log(colors.red(m));
    }

}
