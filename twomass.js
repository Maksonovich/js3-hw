// Написать функцию и назвать ее twoMass и передать 2 аргумента array и сравнить их длину 
let arr1 = [1 ,2 ,3];
let arr2 = [2,3,4,5,6,7];

function twoMass (arr1 , arr2) {
    if (arr1.length < arr2.length) {
        console.log(arr2.length);
    }else if (arr1.length > arr2.length) {
        console.log(arr1.length);
    }
}
twoMass(arr1 , arr2);