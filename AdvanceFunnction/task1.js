
function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback(number);
    } else {
        oddCallback(number);
    }
}
function handleEven(num) {
    console.log("number is even");
}

function handleOdd(num) {
    console.log("number is odd");
}
handleNum(9, handleEven, handleOdd);
handleNum(12, handleEven, handleOdd);