// let realNumber = Math.floor(Math.random()*99) + 10; //Between 10 to 99 
let realNumber = 33;
let red = "#ff6b6b";
let green = "#1dd1a1";
let yellow= "#ffeaa7";


function checkNumber(){
  let estimatedNumber = document.getElementById("estimated-number").value;

  if(estimatedNumber >= 100 || estimatedNumber <= 9){
    document.getElementById("show-result").innerText = "Number must be between 10-99."
    document.getElementById("show-result").style.color = yellow;
    document.getElementById('button').style.border = "2px solid #ffeaa7";
    document.getElementById('estimated-number').style.border = "2px solid #ffeaa7";
  }

  else if (estimatedNumber > realNumber) {
    document.getElementById("show-result").innerText = "Please try with lower number."
    document.getElementById("show-result").style.color = red;
    document.getElementById('button').style.border = "2px solid #ff6b6b";
    document.getElementById('estimated-number').style.border = "2px solid #ff6b6b";


  } else if(estimatedNumber < realNumber){
    document.getElementById("show-result").innerText = "Please try with upper number."    
    document.getElementById("show-result").style.color = red;
    document.getElementById('estimated-number').style.border = "2px solid #ff6b6b";
    document.getElementById('button').style.border = "2px solid #ff6b6b";

  }
  else{
    document.getElementById("show-result").innerText = "You found that. Concursolution!"    
    document.getElementById("show-result").style.color = green;
    document.getElementById('estimated-number').style.border = "2px solid #1dd1a1";
    document.getElementById('button').style.border = "2px solid #1dd1a1";

  }
}
