function readInput() {
    let inputList = [];

    do {
        let number = prompt("Enter an integer (a negative integer to quit): ");
        let intNumber = parseInt(number);

        if (isNaN(intNumber)) {
            //alert("Please enter a valid number.");
        } else if (intNumber < 0) {
            break;
        } else {
            inputList.push(intNumber);
        }
    } while (true);

    return inputList;
}

function displayStats(list) {
    const sum = list.reduce((acc, num) => acc + num, 0);
    const average = list.length > 0 ? sum / list.length : 0;
    const min = list.length > 0 ? Math.min(...list) : 0;
    const max = list.length > 0 ? Math.max(...list) : 0;

    console.log("Statistics:",list);
    console.log("Average:", average.toFixed(2));
    console.log("Min:", min);
    console.log("Max:", max);

    alert(`For the list ${list}, the average is ${average.toFixed(2)}, the minimum: ${min}, and the maximum is ${max}`);
}

function main() {
    const inputList = readInput();
    displayStats(inputList);
   
}

main();

