let shoppingList = new Map([
    [1, 'Banana'],
    [2, 'Pineapple'],
    [3, 'Pear'],
    [4, 'Carrot'],
    [5, 'Apple'],
]);

for(let col of shoppingList.entries()) {
    console.log( `${col[0]}: ${col[1]}` );
}



module.exports = { shoppingList, arrKey, arrValue };