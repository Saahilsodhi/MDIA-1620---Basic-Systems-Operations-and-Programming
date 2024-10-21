const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

//determine a proper function name and parameter variable name
function TheFunction(paramVariable1, paramVariable2){

  let name = "Saahil";
let ="score";
if (score >="86") {
  console.log ("Excellent [name] has an A") ;
}
else if (score = "72-85") {
  console.log ("Great job [name] has a B") ;
}
else if (score = "60-72") {
  console.log ("Good effort [name] has a C") ;
}
else if (score = "50-60") {
  console.log ("Needs improvment [name] has a D") ; 
}
else if (score <= "50"){
  console.log ("Fail [name] has an F")
}
}

function StartApp(){
  readline.question('Write a proper question to get the student name', _input1 => {
    readline.question('Write a proper question to get student score', _input2 => {


      // readline.close();
      if(_input2 !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

/* planning
make a grading system 
where if a student scores 86-100 it will show "Excellent [name] has an A"
if score is 72-85 "Great job [name] has a B"
if score is 60-72 "Good effort [name] has a C"
if score is 50-60 "Needs improvment [name] has a D"
if score 0-50 "Fail [name] has an F"
name = "Saahil"
spend 45 minutes on this
*/
