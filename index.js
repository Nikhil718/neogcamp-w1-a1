var readlineSync = require('readline-sync');


var userName = readlineSync.question("Please enter your name  ");

console.log("Welcomming you to my quiz " + userName +".");
console.log( " Please enter only the option in capital letter.")
console.log("###########################");

// quiz
var score = 0;
function myQuiz(question,answero,answerw){
  //printing the question and getting the answer from userName

  var userAnswer = readlineSync.question( question+"   " + "Answer : " );
    if(userAnswer === answero)
    {
      console.log("RIGHT ANSWER!!");
      score = score + 1 ;
    }
     else 
    {
      console.log("WRONG ANSWER!!");
      console.log("Correct answer is " + answerw );
      score = score;
    }
 console.log("Your score is " + score);

 console.log("************************");
}

// Creating set of questions

var questionBank = [{
  question : `1) Which is my home town?"
    A. Kumta

    B. Honavar

    C. Udupi

    D. Mangalore  ` ,

                
   answero : 'B' ,

   answerw : ' B. Honavar'
   
},
{
  question : `2. Which is my favourite dish?

A. Biryani

B. Pizza

C. Burger

D. Golgappa` ,

answero : 'A',

answerw : 'A. Biryani'
},
{
  question : `3. Which is my favourite Destination?

A. China

B. Malaysia

C. Bali

D. Korea`,

answero : 'C',

answerw : 'C. Bali'
},
{
  question : `4. Which is my favourite color?

A. Green

B. Orange

C. Red

D. Black`,

answero : 'C',

answerw : 'A. Red'
},
{
  question : `	
5) Where do I leave

A.	Uttar Pradesh

B.	Rajasthan

C.	Maharashtra

D.	Bangalore`,

answero : 'D',

answerw : 'D.	Bangalore'

}

];

for( var i = 0; i< questionBank.length;i++){
  var currentQuestion = questionBank[i];
  myQuiz(currentQuestion.question,currentQuestion.answero,currentQuestion.answerw);
}

console.log("Thank You, Your final score is " + score );
