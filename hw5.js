
function getUniqueAfterMerge(arr1, arr2){

    
    let arr = [...arr1, ...arr2];

    
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 30, 1]

getUniqueAfterMerge(array1, array2);




// var myArray1 = [5, 7, 9];
// var myArray2 = [9, 8, 5, 10];
// var myFinalArray = myArray1.concat(myArray2.filter((item) => myArray1.indexOf(item) < 0));
// console.log(myFinalArray);