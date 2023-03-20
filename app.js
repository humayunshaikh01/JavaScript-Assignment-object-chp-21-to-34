// console.log("HELLO")

// Chapter 21 to 25

// Q1
// var userFN = prompt("Enter First Name")
// var userLN = prompt("Enter Last Name")

// var fullName = userFN + userLN;
// document.write("Hello " + fullName)

// Q2
// var userFvrd = prompt("Enter Your Favourite Mobile Name")
// document.write("My Favourite Phone is: " + userFvrd + "<br >" + "Length of String is: " + userFvrd.length)

// Q3
// var country= "Pakistani"
// document.write("String: " + country + "<br >" + " index of 'n': " + country.indexOf("n"))

// Q4
// var Str = "Hello World"
// document.write("String: " + Str + "<br >" + "last index of 'l': " + Str.lastIndexOf("l"))

// Q5
// var country= "Pakistani"
// document.write("String: " + country + "<br >" + "Character at index '3' is " + country.charAt(3));



// // Q7
// var city = "Hyderabad"
// document.write("City: " + city + "<br >" + "After replacement: " + city.replace("Hyder", "Islam"))

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Old message: " + message + "<br >" + "New message: " + message.replace( /and/g , "&"))

// Q9
// var strNum = "472";
// document.write("value: " + strNum + "<br >" + "Type: " + typeof(strNum) + "<br >" + "value: " + strNum  + "<br >" + "Type: " + typeof(parseInt(strNum)))

// // Q10
// var userInp = prompt("Enter Any Words");
// document.write("User Input: " + userInp + "<br >" + "UpperCase: " + userInp.toUpperCase());

// // Q11
// var userInp = prompt("Enter Any Words");
// var a = userInp[0].toUpperCase() + userInp.slice(1);
// document.write("User Input: " + userInp + "<br >" + "Title Case: " + a);

// Q12
// var num = 35.36;
// var numStr = num.toString().replace("." , "");
// document.write("Number: " + num + "<br >" + "Result: " + numStr);

// Q13
// var username = prompt("Enter your username:");
// var userInp = true;
// var specialSymbols = ['.', ',', '-', '@', '!'];
// for (var i = 0; i < specialSymbols.length; i++) {
//   if (username.includes(specialSymbols[i])) {
//     userInp = false;
//     break;
//   }
// }
// if (!userInp) {
//   alert("Invalid UserName! User Name only contains ' _ ' this symbols");
// }document.write(username)

// Q14
// var A = ["cake", "applePie", "cookie", "chips", "patties"];

// var userInp = prompt("Type to see the item")

// var found = false;

// for(var i = 0; i < A.length; i++){
//     if(A[i].toLowerCase() === userInp.toLowerCase()){
//         found = true;
//         break;
//     }
// }

// if (found) {
//       document.write(A[i] + " is available at index. " + i + " in our bakery");
//     } else {
//       document.write(userInp + " is not Available.");
//     }

// Q15
// var paswrd = prompt("Enter a password");
// if(paswrd.length < 8){
//     paswrd = prompt("Password Should be at least 8 Characters long")
// }else if(!/^[a-zA-Z][a-zA-Z0-9]*$/.test(paswrd)){
//     paswrd = prompt("Password Should contain Only alphabets and numbers , Please enter a valid Password.")}
//     else{
//         alert("Password Accepted!")
//     }

// Q16
// var university = "University of Karachi"
// var arr = university.split("")

// for (var i = 0; i < arr.length; i++){
//     document.write(arr[i] + "<br >")
// }

// Q17
// var userInp = prompt("Enter any word")
// document.write("User Input: " + userInp + "<br >" + "Last Character of input: " + userInp.charAt(userInp.length -1));

// Q18
// var str = "The quick brown fox jumps over the lazy dog";
// var countNum = 0;
// var words = str.split(" ");

// for (var i = 0; i < words.length; i++){
//     if(words[i].toLowerCase() === "the"){
//         countNum++
//     }
// }
// document.write("Text: " + str + "<br >" + "There are " + countNum + " occurrence(s) of word 'the'")


// Chpt. 26 to 30

// Q1
// var num = +prompt("Enter any Positive Numbers");
// document.write("Number: " + num + "<br >" + "Round of value " + Math.round(num) + "<br >" + "Floor value: " + Math.floor(num) + "<br >" + "Ceil value: " + Math.ceil(num))

// Q2
// var num = +prompt("Enter any Negative Numbers");
// document.write("Number: " + num + "<br >" + "Round of value " + Math.round(num) + "<br >" + "Floor value: " + Math.floor(num) + "<br >" + "Ceil value: " + Math.ceil(num))

// Q3
// var num = +prompt("Enter any number");
// var abso = Math.abs(num);
// document.write("Absolute value of " + num + " is " + abso);

// Q4
// var num = Math.random() *6 + 1
// var floorNum = Math.floor(num);
// document.write("Random dice value: " + floorNum);

// Q5
// var coin = Math.random()*1 + 1;
// var roundNum = Math.round(coin);
// var results;

// if (roundNum == 1){
//     results = "Heads"
// }else{
//     results = "Tails"
// }

// document.write( roundNum + " is "+ results);


// Q6
// var randNum = Math.random()*100 + 1;
// var roundNum = Math.round(randNum);
// document.write("Random number between 1 to 100: " + roundNum);

// Q7
// var userWeight = prompt("Enter your weight");
// document.write("The weight of user is " + userWeight)


// Q8
// var userNum = +prompt("Enter a number")
// var secretNum = 7;

// if (userNum === secretNum){
//     document.write("Congratulations!")
// }else if(userNum === 6 || userNum === 8){
//     document.write("ohhh You were too close!")
// }else{
//     document.write("Try Again!")
// }



// Chpt. 31 to 34
// Q1
// var now = new Date();
// document.write(now);


// Q2
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date()
// var month = months[now.getMonth()]
// document.write("current month is: " + month);


// Q3
// var days = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var now = new Date();
// var day = days[now.getDay()];
// document.write("Today is " + day)


// Q4
// var days = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var d = new Date();
// var day = days[d.getDay()];
// if (day === "Sat" || day === "Sun"){
//     document.write("Its a fun day")
// }else{
//     document.write("Busy Days!")
// }

// Q5
// var d = new Date();
// var days = d.getDate();
// if(days <= 15){
//     document.write("First fifteen days of Month")
// }else{
//     document.write("Last days of Month")
// }


// Q6
// var now = new Date();
// var miliSec = now.getTime();
// var mint =  now.getTime() /( 1000 * 60 * 60)
// document.write("Current Time: " + now + "<br >" + "Elapsed miliseconds since january 1, 1970: " + miliSec + "<br >" + "Elapsed Minutes since january 1, 1970: " + mint);


// Q7
// var now = new Date();
// var hour = now.getHours("13");
// if (hour < 12){
//     document.write("It's AM")
// }else{
//     document.write("It's PM")
// }