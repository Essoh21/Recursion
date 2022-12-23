const merge = (sortedArray1, sortedArray2) => {
    const premergedArray = [];
    let firstArryIndex = 0;
    let secondArrayIndex = 0;
    const firstArrayLength = sortedArray1.length;
    const secondArrayLength = sortedArray2.length;
    while ((
        firstArryIndex < firstArrayLength)
        && (secondArrayIndex < secondArrayLength)
    ) {
        const firstArrayElement = sortedArray1[firstArryIndex];
        const secondArrayElement = sortedArray2[secondArrayIndex];
        if (firstArrayElement < secondArrayElement) {
            premergedArray.push(firstArrayElement);
            firstArryIndex += 1;
        } else {
            premergedArray.push(secondArrayElement);
            secondArrayIndex += 1
        }
    }
    return [
        ...premergedArray,
        ...sortedArray1.slice(firstArryIndex),
        ...sortedArray2.slice(secondArrayIndex)
    ];

}

const mergeSort = (ArrayToSort) => {
    const inputedArrayLength = ArrayToSort.length;
    if (inputedArrayLength <= 1) {
        return ArrayToSort;
    }
    const startingIndex = 0;
    const middleIndex = Math.floor(inputedArrayLength / 2);
    const leftArray = ArrayToSort.slice(startingIndex, middleIndex);
    const rightArray = ArrayToSort.slice(middleIndex);
    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );
};

console.log(mergeSort([4, 5, 9, 4, 2]));