
//chapter:31/34

//  var rightnow=new Date();
// document.write(rightnow);
// console.log (rightnow);
// console.log (rightnow.getDate());
// console.log (rightnow.getDay());
// console.log (rightnow.getFullYear());
// console.log (rightnow.getMinutes());
// console.log (rightnow.getSeconds());
// console.log (rightnow.getTime());
// console.log (rightnow.getUTCMilliseconds());
// console.log (rightnow.getMonth()); 


// var a =new Date();
// document.write (a);
// console.log(a.getMonth());
// alert(a.getMonth());



// var rightnow=new Date();
// document.write(rightnow);
// console.log (rightnow);
// console.log (rightnow.getDate());
// console.log (rightnow.getDay());
// console.log (rightnow.getFullYear());
// console.log (rightnow.getMinutes());
// console.log (rightnow.getSeconds());
// console.log (rightnow.getTime());
// console.log (rightnow.getUTCMilliseconds());
// console.log (rightnow.getMonth()); 

// var localDate = new Date();
// var months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// var currentMonth = months[localDate.getMonth()];
//  alert(currentMonth);


//  var localDate = new Date();
//  var Day = [
//      'Sunday',
//      'Monday',
//      'Tuesday',
//      'Wednesday',
//      'Thursday',
//      'Friday',
//    'Saturday',
   

//  ];
 
//  var currentDay = Day[localDate.getDay()];
//   alert(currentDay);

//4
// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var a = b.slice(0,3);
// alert("Today is " + a);
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var a = b.slice(0,3);
// if (a === "Saturday"){
//     alert("It's Fun Day")
// }else if(a === "Sunday"){
//     alert("It's Fun Day")
// }else if(a === "Monday"){
//    document.write("It's work Day")
    
// }else if(a === "Tuesday"){
//     document.write("It's work Day")
   
// }else if(a === "Wednesday"){
//     document.write("It's work Day")
   
// }else if(a === "Thursday"){
//     document.write("It's work Day")
   
// }else if(a === "Friday"){
//     document.write("It's work Day")
   
// }
// alert(a) 




// var d= new Date()
// d.setMonth(7)
// d.setDate(8)
// d.setFullYear(2005)
// d.setHours(1)
// d.setMinutes(30)
// d.setSeconds(50)
// // console.log(d);
// document.write(d);



// var inp=prompt()
// var todayDate = new Date()
// var spaceDateTime = new Date(inp)
//  var spaceDateTime = spaceDateTime.getTime();
// var currentTime = todayDate.getTime();
// var diff = currentTime-spaceDateTime
// var finalDate = diff/(1000*60*60*24*365)
// // console.log(finalDate);
//  var age = Math.round(finalDate)
//  document.write(age)


//changing case
// var a = prompt("Enter Your Name");
//  a = a.toLocaleLowerCase();
//  document.write(a)
//upper
// var a = prompt("Enter Your Name");
//  a = a.toLocaleUpperCase();
//  document.write(a)


// var year_born = prompt("Please enter your date of birth:", "Type here");
// var d = new Date();
// var n = d.getFullYear();
// function getAge(birthYear){
// 	var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     age = currentYear - birthYear;
//     return age;
// }
// calculatedAge = getAge(year_born);
// alert("Hello, " + "you are " + calculatedAge + " years old!");
// units = 1000
// bill = 0
// if(units<=50){
//   bill  = units*1
// }
// else if(units <=150){
//   bill = 50*1 + (units-50)*2
// }
// else if(units <=250){
//   bill = 50*1 + 100*2 + (units-150)*3
// }
// else if(units>250){
//   bill = 50*1 + 100*2 + 150*3 + (units-250) *4
// }

// if(bill>150){
//   bill = bill + bill*0.2
// }
// console.log(bill)


// var month = 1; 
// var d = new Date(2022, month + 11, 0);
// console.log(d.toString());
// record start time

// var startTime = new Date();
// var endTime = new Date();
// var timeDiff = endTime - startTime;
// timeDiff /= 1000;
// var seconds = Math.round(timeDiff % 50);
// timeDiff = Math.floor(timeDiff / 50);
// var minutes = Math.round(timeDiff % 50);
// timeDiff = Math.floor(timeDiff / 50);
// var hours = Math.round(timeDiff % 24);
// timeDiff = Math.floor(timeDiff / 24);
// var days = timeDiff ;
// document.write(timeDiff)

// new Date(1776, 6, 4, 12, 30, 0, 0);
// new Date(-6106015800000);
// new Date("January 31 1980 12:30");
// document.write(new Date)

//35\38

// var  num1 = parseInt(prompt('Enter the first number '));
// var  num2 = parseInt(prompt('Enter the second number '));
// var sum = num1 + num2;
// document.write(`The sum of ${num1} and ${num2} is ${sum}`);

// function sumOfSquares(num) {
//     var i;

//     for (i=0,i<=num,i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
//      document.write("The sum of squares for numbers up to and including " +num+ "is " +sum+ ) ;
// }
// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);


// var number = parseInt(prompt('Enter a positive integer: '));

// if (number < 0) {
//     document.write('Error! Factorial for negative number does not exist.');
// }

// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     document.write(`The factorial of ${number} is ${fact}.`);
// }

// var num = Math.ceil(Math.random() * 10);
// document.write(num);
//  var anum = prompt('Guess the number between 1 and 10 inclusive');
//  if (anum == num)
//    document.write('Matched');
//   else
//    document.write('Not matched, the number was '+anum);

// function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }
//   console.log(pythagorean(4, 3));



// var a = 35.36;
// var b = a.toString();
// console.log(a)
// console.log(typeof b);



// var a = 33.564613214864;
// var num = a.toFixed(0);
// console.log(num);
// console.log(typeof a);





// var todayDate = new Date()
// var hours= todayDate.getHours()
// var minutes=todayDate.getMinutes()
// var seconds=todayDate.getSeconds()
// document.write(hours+":"+minutes+":"+seconds);