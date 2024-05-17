"use strict";
function makeSandwiches(item) {
    console.log('Making your sandwiche with:');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwiche!\n');
}
makeSandwiches(['Ham', 'cheese', 'lettuce']);
makeSandwiches(['Turkey', 'Bacon']);
makeSandwiches(['jelly', 'Peanut butter']);
