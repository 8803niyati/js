// function
// 1
// function smallernum(){
// let x=10;
// y=20;
// if(x>y){
// console.log("y is smaller than x");
// }else{
//      console.log("x is samller than y");
// }
// }
// smallernum();
// 2
// function smaller(){
// let a=100;
// b=10;

// if(a<b);
// console.log("a is smallar than b");
// }
// smaller();
// 3
// function minnumber(){
//     let a=100;
//     b=10;
    
//     if(a<b);
//     console.log("a is smallar than b");
//     }
//     minnumber();
// 4
// function area(){
// let r=10;
// let area;
// area = 3.14*(r**2);
// console.log("area of cricle is :",area );
// }
// area();
// 5
// function result(){
// let a=4,b=-8;
// let result;
// result =( a**2)-(b**2) === (a-b )*(a+b);
// console.log(result);
// }
// result();
// 6
// function rectangle(){
// let a=20; b=8;
// let area;
// area = a*b;
// console.log("area of rectangle is :",area);
// }
// rectangle();
// 7
// function age(){
// let age = 17;
//    if(age < 0){
//     console.log("invalid age");
//   }
//   else if(age <= 12){
//     console.log("child");
//   }
//   else if(age <= 19){
//     console.log("tenager");
//   }
//   else if(age <= 64){
//     console.log("adluest");
//   }
//   else{
//     console.log("senior citizen");
//   }
// }
// age();
// 8
// function armstrong(){
// let num=100;
// let sum = 0;
// let rem;
// do{
//    let= num * 10;
//    sum = sum +rem * rem * rem;
//    num=Math.floor(num /10);
//    if(sum == num){
//     console.log( "is a armstrong number");
//    }else{
//     console.log( "is a  not armstrong number");
//    }
// }
//    while(num > 0);
// } 
//  armstrong();
// 9
// function sum(){
// let sum=0;
// let i=1;
// do{
//     sum += i;
//     i++;
// }while(i <= 100);
// console.log("sum:" + sum);
// }
// sum();
// 10
// function value2(){
// for(let i=51; i<=70;i++){
//     console.log(i);
// }
// }
// value2();
// 11
// function number(){
// let n=5;
// let i=1;
// do{
//     console.log(i * i);
//     i++;
// }
// while(i <=n);
// }
// number();
// 12
// function celsius(){
//  let celsius,fahrenheit;
// celsius=1;
// fahrenheit =(celsius * 9/5 ) + 32;
// console.log("fahrenheit is:",fahrenheit);
// }
// celsius();
// 13
// function table(){
// let number = 45;
// let i =1;
// console.log("multiplication table for:" ,number);
// while( i <= 10){
//     console.log(number ,"x", i, "=",number * i);
//     i++;
// }
// }
// table();
// 14
// function total(){
// let total= 0;
// let i =0 ;
// while( i<= 30){
//     total += i;
//     i++;
// }
// console.log("total:" + total);
// }
// total();
// 15
// function series(){
// let i=1;
// console.log("fizzbuzz from 1 to 100:");
// do{
//     if( i % 3 === 0 && i % 5 === 0){
//         console.log("fizzbuzz");
//     }else if( i % 3 === 0){
//         console.log("fizz");
//     }else if( i % 5  === 0){
//         console.log("buzz");
//     }else {
//         console.log(i);
//     }
//     i++;

// }while ( i<= 100);
// }
// series();

// no argument no return
// function add(){
//     let a=15; b=26;
//     console.log("addition of a and b is:", a + b);
// }
// add();

// no argument with return
// function product(){
//     let x=5,y=15;
//     let a;
//     a =x * y;
//     return a;
// }
// console.log(product());

// with argument with return
// function addition(a,b){
//      let total;
//      total= a+b;
//      console.log("total is:",total);
// }
// addition(15,25);

// with argument no return
// function addition(a,b){
//     let total =a+b;
//    return total;
// }
// console.log(addition(15,36));


choice= parseInt(prompt("enter a choice:"));
switch(choice){
    case "1":
        add1();
        break;
    case "2":
        console.log(add2());
        break;
    case "3":
       add3(10,20)
        break;   
    case "4" :
        console.log(add4(15,20));
        default:
        console.log("invalid choice");
}


