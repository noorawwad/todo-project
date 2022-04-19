'use strict'
var userName=prompt("Please enter your name");
var gender=prompt ("please enter your gender if its a male or female?");
var userAge =prompt("Can you please enter your age");
if (userAge<=0){
    alert("The age is not accepted ");
}
confirm("Do you wants to skip the welcoming message.")
if(gender.toLowerCase() =="male"){
    alert("Hello in the To-do website Mr "+(userName));
}else if(gender.toLowerCase() =="female"){
    alert("Hello in the To-do website Ms " +(userName));  
}else{alert("Hello in the To-do website") }


let questionOne=prompt("Do you love to design a web site ?");
let questionTwo=prompt("Do you Know about the core languages that is used to make the website ?");
let questionThree=prompt("Do you curious about JavaScript?");

let answerArray=[];
function question(answer){
if (answer.toLowerCase() =="yes"){
      return answerArray.push("yes");
}else if (answer.toLowerCase() =="no"){
    return answerArray.push("no");
}else { return answerArray.push("invalid");}
}
question(questionOne);
question(questionTwo);
question(questionThree);


function reverseArr (){
    let reverseArray=[];
for (let i = answerArray.length- 1;i>=0; i--) {
   let rev=answerArray[i];
   console.log(rev);
}
return reverseArray;
}
reverseArr(answerArray);