var userName=prompt("Please enter your name");
var gender=prompt ("please enter your gender if its a male or female?");
var userAge =prompt("Can you please enter your age");
if (userAge<=0){
    alert("The age is not accepted ");
}
confirm("Do you wants to skip the welcoming message.")
if(gender.toLowerCase() =="male"){
    alert("Hello in the To-do website Mr  "+(userName));
}else if(gender.toLowerCase() =="female"){
    alert("Hello in the To-do website Ms " +(userName));  
}else{alert("Hello in the To-do website") }

