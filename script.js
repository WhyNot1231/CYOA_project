let submit = function(){
  goSleep=document.getElementById("choice1");
  explore=document.getElementById("choice2");

  if(goSleep.checked){
    document.getElementById("choice1").innerHTML="<form id='form2'>"+"<span>You wake up and feel... different. What do you do?</span>" + "<br>" + "<input type='radio' name='userChoice' id='choice1'>" + "<label for='choice1'>Just stay quiet about it.</label>" + "<br>" + "<input type='radio' name='userChoice' id='choice2'>" + "<label for='choice2'>Tell mom.</label>" + "<br>" + "<input type='button' onclick='submit()' value='SUBMIT ANSWER'>" + "</form>"
  }
  if(explore.checked){
    document.getElementById("choice2").innerHTML="<form id='form2'>"+"<span>You see a furry, brown-colored creature that startles you. Its beady eyes follow your every movement as you shine your light into its face. Your next move?</span>" + "<br>" + "<input type='radio' name='userChoice' id='choice1'>" + "<label for='choice1'>Talk to it.</label>" + "<br>" + "<input type='radio' name='userChoice' id='choice2'>" + "<label for='choice2'>Run in the opposite direction.</label>" + "<br>" + "<input type='button' onclick='submit() value='SUBMIT ANSWER'>" + "</form>"
  }
}
let first = function(){
  document.getElementById("form1").innerHTML= "<span>You hear a noise that wakes you. What do you do?</span>"+"<br>"+"<input type='radio' name='userChoice' id='choice1'>"+"<label for='choice1'>Go back to sleep. It's probably nothing anyway.</label>"+"<br>"+"<input type='radio' name='userChoice' id='choice2'>"+"<label for='choice2'>You grab your flashlight and find the source of the noise.</label>"+"<br>"+"<input type='button' id='submit' onclick='submit()' value='SUBMIT ANSWER'>";
}




/* You see a creature in the night. You have choices from there. In the end, you either meet some crazy witch doctor voodoo fortune-teller person to cure you, and they doubtedly do, with the cost of your eyes, or the creature shows you who it works for, who takes you into some underground, mythical society where you can now never leave.*/