function myFunc(){
   var text = document.getElementById('somethings').value;
   if(text == "ECMAScript"){
      text = "Right";
   } else {
      text = " Don't know ? ECMAScript";
   }
   document.getElementById('exp').innerHTML = text;
}