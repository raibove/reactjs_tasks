/*
	Write a JavaScript program to check two given numbers and return true if
	one of the number is 50 or if their sum is 50 
*/

function f1(num1,num2){
	return (num1===50 || num2===50 || num2+num1===50);
}

console.log("num1 = 10, num2 = 30 Output is: "+f1(10,30));
console.log("num1 = 50, num2 = 30 Output is: "+f1(50,30));
console.log("num1 = 20, num2 = 30 Output is: "+f1(20,30));
