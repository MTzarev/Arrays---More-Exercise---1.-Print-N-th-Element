function printNthElement(array) {
    let a = array.pop();
    let newArray = [];
    for (let i = 0; i <= array.length; i+= +a) {
        newArray.push(array[i]);

    }

    console.log(newArray.join(` `));
}
printNthElement(['5', '20', '31', '4', '20', '2']);
//printNthElement(['dsa', 'asd', 'test', 'test', '2']);
//printNthElement(['1', '2', '3', '4', '5', '6']);