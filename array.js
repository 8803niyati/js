// Array

// let arr = [11,22,33,44,55];
//    console.log(arr);
//    console.log(arr[0]);
//    console.log(arr[4]);

// methods
//  1.Push
//    let data = [11,22,33,44,55];
//    data.push(100);
//    data.push(200,300,400);
//    console.log(data);

// 2.pop
// let data = [11,22,33,44,55];
//    data.pop(55);
//    console.log(data);

//3.unshift
// let data = [11,22,33,44,55];
//    data.unshift(100);
//    data.unshift(100,200,300);
//    console.log(data);

// 4.shift
// let data = [11,22,33,44,55,66,77,88,99];
//    data.shift(11);
//    console.log(data);

// 5.splice add
// let data = [11,22,33,44,55,66,77,88,99];
//    data.splice(2,0,100);
//    console.log(data);

//remove
// let data = [11,22,33,44,55,66,77,88,99];
//    data.splice(2,1,100);
//    console.log(data);

// delete
//    let data = [11,22,33,44,55,66,77,88,99];
//    data.splice(3,2);
//    console.log(data);

// 6.includes
// let data=[11,22,33,44,55];
// console.log(data);
// console.log(data.includes(44));

// 7.array-isarray
// let data=[11,22,33,44,55];
// console.log(data);
// console.log(Array.isArray(data));

// 8.find index
// let data=[11,22,33,44,55];
// console.log(data);
// console.log(data.indexOf(55));

// 9.filter
// let data=[11,22,33,44,55];
// let res = data.filter((ele) => {
//       return ele <= 30;
// })
// console.log(res);

//10.every
// let data=[11,22,33,44,55];
// let res = data.every((ele) => {
//       return ele <= 66;
// })
// console.log(res);

// 10.some
// let data=[11,22,33,44,55];
// let res = data.some((ele) => {
//       return ele <= 40;
// })
// console.log(res);

// 11.foreach
// let data=[11,22,33,44,55];
// let res=data.foreach((ele) => {
//    console.log(i ,ele);
// })
// console.log(res);

// 12.map
let data=[11,22,33,44,55];
let res =data.map((ele)=>{
     return ele *3;
}
console.log(res);