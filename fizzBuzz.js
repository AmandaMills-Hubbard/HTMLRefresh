
var number = 0;
for (i = 0; i <= 99; i++){
 number ++;
 if (number % 3 === 0){
  console.log("Fizz");
 }else if(number % 5 === 0){
  console.log("Buzz");
 }
  if (number % 5 === 0 && number % 3 === 0){
  console.log("FizzBuzz")
 }
  else{
   console.log(number)
  }

}
