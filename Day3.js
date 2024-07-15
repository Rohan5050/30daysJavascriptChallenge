 // Activity 1

 let num=35;

 if( num>0 ) {
    console.log("num is positive");
 }

 else if(num<0) {
    console.log("num is negative");
 }

 else {
    console.log("num is equal to 0")
 } 


 let age=21;

 if(age>=18) {
   console.log("Eligible to Vote");
 }

 else {
   console.log("Not Eligible to vote");
 }


 // Activity 2

 let num1=53;
 let num2=23;
 let num3=25;

 if(num1>num2 && num1>num3) {
   console.log("num1 is the largest number");
 }


 else if(num2>num1 && num2>num3) {
   console.log("num2 is the largest number");
 }

else {
   console.log("num3 is the largest number")
}


// Activity 3

let day=1;

switch (day) {
   case 1:
      day="Monday";
      break;

   case 2 :
      day="Tuesday";
      break;

   case 3 :
      day="Wednesday";
      break;
   
   case 4 :
      day="Thursday";
      break;


   case 5 :
      day="Friday";
      break;
   
   case 6 :
      day="Saturday";
      break;
   
   case 7 :
      day = "Sunday";
      break;
   default :
      console.log("Not a Valid Number");
      break;

}

console.log(day);

let marks = 95;
function gradeteller(marks) {
   let grade;

   switch (true) {
     case (90<=marks && 100>=marks):
        console.log("grade=A");
        break;

     case (80<=marks && 90>marks) :
        console.log("grade=B");
        break;

     case (70<=marks && 80>marks) :
        console.log("grade=C");
        break;
   
      case (60<=marks && 70>marks) :
        console.log("grade=D");
        break;


      case (50<=marks && 50>marks) :
        console.log("grade=E");
        break;

     default :
      console.log("grade=F");
      break;
  }


}

gradeteller(95); 
gradeteller(76);


// Activity 5

 let nums;

 function checkEvenOrOdd (nums) {
   let result=nums%2==0? "Even" : "Odd";
   console.log(result);

 }

 checkEvenOrOdd(55);


 // Activity 6

 let year;

 function checkleapyear(year) {
   if(year%4===0 && year%100!==0 || year % 400 === 0 ) {
      console.log(year + " is leap year");
   }

   else {
      console.log(year +" is not a leap year");
   }

 }

 checkleapyear(2020);
 checkleapyear(2050);
