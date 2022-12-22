function fibs(number) {
    let fibNumbersContainer = [0];
    if (number == 1) {
        return fibNumbersContainer;
    } else if (number == 2) {
        fibNumbersContainer.push(1);
        return fibNumbersContainer;
    } else {
        fibNumbersContainer[1] = 1;
        for (let i = 2; i < number; i += 1) {
            fibNumbersContainer[i] = fibNumbersContainer[i - 2] + fibNumbersContainer[i - 1];
        }
        return fibNumbersContainer;
    }
}


function fibsRec(number) {
    if (number == 1) {
        return [0];
    } else if (number == 2) {
        return [0, 1];
    }
    return [...fibsRec(number - 1)
        , fibsRec(number - 1)[number - 2] + fibsRec(number - 1)[number - 3]
    ];
}

setTimeout(() => console.log(`${fibsRec(20)} rec`), 2000);
setTimeout(() => console.log(`${fibs(20)} loop`), 1000);