/*
let num1= prompt("enter the first number")
let num2 =prompt ("Enter the second number")
console.log(`the som of the tow numbers is ${num1+num2}`)
let age = prompt("enter the age")
if (age<=0 || age>=100){
    console.log(`you are not alive`)
}
//----------------------------------------------------

let num = prompt("enter the number")
if(num %2 == 0){
    console.log("the number is even ")
}
else{
    console.log("the number is odd")
}
//----------------------------------------------------

let mark = prompt("enter your mark ")
if(mark > 60){
    console.log("YOU HAVE PASSET")
    if(mark >=90 && mark <=100){
        console.log("your grade is A ");
    }
    else if(mark >=80 && mark <90){
        console.log("your grade is B ");
    }
    else if(mark >=70 && mark <80){
        console.log("your grade is C ");
    }
    else if(mark >=60 && mark <70){
        console.log(" your grade is D ")
    }
}
else{
    console.log("YOU HAVE FAILED");
}
//----------------------------------------------------

let day =Number("enter the number of the day : ")
day = day%7
if(day==1){
    console.log("the day is saterday")
}
else if(day==2){
    console.log("the day is sonday")
}
else if(day==3){
    console.log("the day is monday")
}
else if(day==4){
    console.log("the day is tusday")
}
else if(day==5){
    console.log("the day is winsday")
}
else if(day==6){
    console.log("the day is taersday")
}
else if(day==7){
    console.log("the day is friday")
}
else {
    console.log("plese inter a valed number ")
}
//----------------------------------------------------

switch(day){
    case 0:
        console.log("the day is saterday")
        break
    case 1:
        console.log("the day is sonday")
        break
    case 2:
        console.log("the day is monday")
        break
    case 3:
        console.log("the day is tusday")
        break
    case 4:
        console.log("the day is wensday")
        break
    case 5:
        console.log("the day is thersday")
        break
    case 6:
        console.log("the day is friday")
        break
    default:
        console.log("plese enter a valed number ")
}
//----------------------------------------------------

let list=["mahmoud","ali","ayman ","ahmed","omar"]
console.log(list)
list[0]="omnia"
list[2]="maya"
console.log(list)
//----------------------------------------------------

let age=Number(prompt("enter your age "))
if (age>=0 && age<=18){
    console.log("your are ${age} years old your yong")
} 
else{
    console.log("your are ${age} years old your old")
}
//----------------------------------------------------

let firstNum=Number(prompt("ente the first number"))
let secondtNum=Number(prompt("ente the second number"))
if( firstNum % secondtNum ==0){
    console.log("The First Number is divesabul on the Second Number")
}
else{
    console.log("The First Number is not divesabul on the Second Number")
}
//----------------------------------------------------

let conrentState = prompt("enter the state your in ")
if(conrentState == "stope"){
    console.log("RED")
}
else if(conrentState == "rady"){
    console.log("Yellow")
}
else if(conrentState == "going"){
    console.log("Green")
}
else {console.log("please ente stope, rady or going")}
//----------------------------------------------------

let gm="mahmoud@gmail.com"
let pw="123456789"
let ask_gm=prompt("enter the email")
let ask_pw=prompt("enter the password")
if(ask_gm==gm && ask_pw==pw){
    console.log("welcome to our site")
}
else{
    console.log("you have entered wrong data please try again")
}
//----------------------------------------------------

let price = Number(prompt(" enter the peice : "))
let is_mamber = prompt(" are you a member yes / no ")
let descount = 0.2
 
if(is_mamber=="yes"){
    let finalPrice= price * (1-descount)
    console.log("your total price is : ",finalPrice)
}
else{
    console.log("your total price is : ",price)
}

//----------------------------------------------------

let myName = "mahmoud"
console.log (myName )
//----------------------------------------------------

function addNumber( num1 ,num2){
   console.log( num1+num2 )
}
addNumber(2,4)

//----------------------------------------------------

let myArray = [1,2,3,4,5];
for (let i of myArray ){
    console.log(i);
}
//----------------------------------------------------
function reverseString(String) {
    return String.split('').reverse().join('');
}

let orgString = prompt("enter the string ")
console.log(reverseString(orgString));

//----------------------------------------------------
let numberArray = [1,2,3,4,5,6,7,8,9,10]
function getSum(numberArray) {
  let total = 0;
  for (const n of numberArray) {
    total += n;
  }
  return total;
}
console.log(numberArray);
console.log(getSum(numberArray));
//----------------------------------------------------
*/
