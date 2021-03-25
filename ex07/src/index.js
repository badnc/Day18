let numberArray  = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];

let uniqueArray = new Set([]);
uniqueArray.add(2);
uniqueArray.add(4);
uniqueArray.add(5);
uniqueArray.add(9);
uniqueArray.add(11);
uniqueArray.add(12);
uniqueArray.add(13);
uniqueArray.add(15);

for (let item of uniqueArray){
    console.log(item);
}

module.exports = { numberArray, uniqueArray };