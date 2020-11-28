//	Write a JavaScript program to calculate days left until next Christmas 

var current_date = new Date();
console.log("current date is: "+current_date);
var christmas = new Date(current_date.getFullYear(),11,25);
console.log("christmas date is: "+christmas);

if(current_date.getMonth()==11 && current_date.getDate()>25){
	christmas.setFullYear(christmas.getFullYear()+1);
}
var one_day=1000*60*60*24;
var days_left = Math.ceil((christmas.getTime() - current_date.getTime())/(one_day));
console.log("Days left until christmas are: "+days_left);