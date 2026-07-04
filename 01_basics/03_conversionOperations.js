let score = "Vedant"
// console.log(typeof(score))
// console.log(typeof score)


let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN(not a number)
// true => 1;  false => 0

let isLoggedIn = 22
//console.log(typeof isLoggedIn)

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)


// 1 => true; 0 => false
// "" => false
// "vedant" => true

let num = 33
let strNum = String(num)
// console.log(strNum)
// console.log(typeof strNum)



// ******************* Operators **********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " Vedant "
let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2); //  (12)  beginning element is string so it assumes as string datatype
// console.log(1 + "2"); //  (12)  beginning element is number so it assumes as number datatype
// console.log("1" + 2 + 2); //  (122)  beginning element is string so it assumes as string datatype
// console.log(1 + 2 + "2");  //  (32)  beginning element is number so it assumes as number datatype and rest of them is treated as string

// console.log(+"") // 0
// console.log(+true) // 1

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
// console.table([num1, num2, num3])

let gameCounter = 100
let a = ++gameCounter;
let b = gameCounter++;
console.log(a)
console.log(b)