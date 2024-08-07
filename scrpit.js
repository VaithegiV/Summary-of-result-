// declare variables for the needed content
let inputs = document.querySelectorAll('.input'); 
let score = document.querySelector('.number');
let evaluate = document.querySelector('.evaluate');
let feedback = document.querySelector('.feedback');
let comparison =document.querySelector('.comparison');

let totalInput = inputs.length;
let sum = 0;

//add all the function inside the click event

evaluate.addEventListener('click', ()=>{
  inputs.forEach((input) => {
    sum += parseFloat(input.value) || 0; //parseFloat for change the input as a number , || 0 is for if the entered input is not valid it adds as 0 intead NaN.
});
let average = sum / totalInput;
score.innerHTML = average;
// to change the feedback and opinion accoding to the output
if (average <= 25 ) {
  feedback.innerHTML = 'Not Good';
  comparison.innerHTML = 'You have to Work more to achive the pass mark. Work Hard!'
}
else if (average > 25 && average <= 50) {
   feedback.innerHTML = 'Average';
   comparison.innerHTML = 'Put more Effort to the subjects you got low scores!'
   
}
else if (average > 50 && average <= 75){
  feedback.innerHTML = 'Good';
  comparison.innerHTML = 'Put little more effort to achive the perfect score!'
}
else{
  feedback.innerHTML = 'Great';
  comparison.innerHTML = 'Goog effort! keep it up score more in future!'
}
});


