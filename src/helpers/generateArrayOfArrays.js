const generateArray = (arr, chunkSize) => {
    const chunkedArr = Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
        arr.slice(index * chunkSize, (index + 1) * chunkSize)
    );

    return chunkedArr;
}

export default generateArray;