let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // length 10
// let arr = [
//   {
//     id: 1,
//     userName: "bebas",
//   },
//   {
//     id: 1,
//     userName: "bebas",
//   },
// ];

arr[0];
arr[1];
arr[2];
arr[3];

// input element on array at the end of array
// arr.push(11);
// console.log(arr);
// remove element at the end
// arr.pop();
// console.log(arr);
// remove element at the start
// arr.shift();
// console.log(arr);
// input element at the start
// arr.unshift(0);
// console.log(arr);
// let newArr = arr.slice(1, 5);
// console.log(newArr, "-arr");
// let newArr = arr.splice(1, 5);
// console.log(newArr, "-arr");

// higher order map, filter, forEach

// for loop
for (let i = 0; i < arr.length; i++) {
  //   console.log("nilai array: ", arr[i]);
}

// for of
for (i of arr) {
  //   console.log("nilai array: ", i);
}

// for loop
// cannot mutate real value
let arrNew = [];
arr.forEach((valueArr) => {
  // looping arraynya
  // akses nilai arraynya how to access array
  // cari nilai array > 5 how to return array greater than
  // push ke array baru how to push to array
  // return

  if (valueArr > 5) {
    arrNew.push(valueArr);
  }
  //   console.log("nilai array: ", valueArr);
  arrNew.push(valueArr + 5);
});

// console.log(arrNew, "--arr new");

// filter
// cannot mutate
let arrFiltered = arr.filter((v) => v > 5);
// console.log(arrNew, arrFiltered);

// map
// cannot mutate
let newArrMap = arr
  .map((v) => v + 5)
  .filter((i) => i > 10)
  .map((v) => v * 10);

// console.log(newArrMap, "--arr map");
