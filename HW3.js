function mathPow(x, y) {
    if (y === 0) {
        return 1;
    }

    var absY = y;
    if (y <0) {
        absY = y *-1;
    }


    let result = 1;
    for (let i = 0; i < absY; i++) {
        result *= x;
    }

    if (y < 0 ){
        return 1/ result;
    } else {

        return result;}
}

console.log(mathPow(2, 3)); // Виведе 8
console.log(mathPow(2, -3)); // Виведе 0.125
console.log(mathPow(2, 0)); // Виведе 1