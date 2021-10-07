//bai 1
// 5 tên đúng: number ,number1, numberVar,_var,number_Var
// 5 tên sai : 1number,numbervar,Number,NumberVar,Number_Var

//bài 2
let x = 2
let y = 4
console.log(y + x);
console.log(y - x);
console.log(y * x);
console.log(y / x);
console.log(y % x);
console.log("----------------------");
//bài 3
let x1 = 5
console.log(++x1 + x1++ - --x1 - x1--) //(6+6-6-6)

let x2 = 6
let y2 = 10
console.log(++y2 - y2++ + x2++ + x2-- - --x2 - --y2) //(11-11+6+7-5-11)

let x3 = 10
let y3 = 12
let z3 = 16
console.log(x3++ + z3-- - --x3 + --y3 - y3-- + ++y3 + ++z3 + --z3 + x3--)//(11 + 16 - 10 + 11 -11+11+16+15+10)
console.log(++x3 - x3++ + z3++ + ++y3 - y3-- ) //(11 - 12 + 16 + 13 - 13)
console.log("-----------------");
 //bài 4
 let a = 1 //number
 console.log(a);
 let string = "hjhj" //string
 console.log(string);
 let objiec = { firstName:"fda",lastName:"kaka"}
 console.log(objiec);
 let array = [1,2,3,4]
 console.log(array);
 console.log("---------------------");

 //bài 5
 let array1 = [1,2,3,4,5,6,7,8,9,10]
 
 
 console.log(array1[0] + array1[1]);
 console.log(array1[0] * array1[9]);
 console.log("--------------");

 //bài 6
 let Objiec = { firstName:"fda",lastName:"kaka",age:"20", favorite:"bbbb"}
 //6.1
 Objiec.firstName= "Thuỳ"
 Objiec.lastName = "Dung"
 //6.2
 console.log(Objiec.firstName,Objiec.lastName);
