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


console.log(fibs(10));