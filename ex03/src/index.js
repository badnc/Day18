function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* 6, 7, 8;
}
var iterator = myGenerator(6, 7, 8);
generatorArray = [];


return generatorArray;
module.exports = { generatorArray, myGenerator };