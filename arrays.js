'use strict';

// 1. printIndices
function printIndices(items) 
for (const i in items) { 
  console.log(`${(i)} ${items[i]}`);

}

// 2. everyOtherItem
function everyOtherItem(items) {
const result= [];

for (const i in items) {
  if (i %2 === 0){
  result.push(items[i]);
}
console.log(result);
}

// 3. smallestNItems
function smallestNItems(items, n) {
const sortedItems = items.sort();
sortedItems=sortedItems.slice(0,n);
sortedItems.reverse();
console.log(sortedItems)
}}
