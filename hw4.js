function filtered(arr) {
  return arr.filter(Boolean);
}

console.log(filtered([0, 1, 2, 3, 'ate', '', false, NaN]));



// function removeBoolean(array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === null || array[i] == isNaN || array[i] === 0 || array[i] === false || array[i] === "" || array[i] === undefined)
//       continue;
//     else
//       arr.push(array[i]);
//   }
//   return arr;
// }
// let array = [0, 2, 4, false, "merry", 67, "", "6Eli", 0 / 0, undefined, null]; /// ==> [2, 4, 'merry', 67,'Eli']
// let result = removeBoolean(array);
// console.log(result);