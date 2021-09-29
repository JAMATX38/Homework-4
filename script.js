var body = document.body;
var h1QS = document.createElement("h1");
var div1ST = document.createElement("div");
var div2ND = document.createElement("div");
var div3RD = document.createElement("div");
var div4TH = document.createElement("div");
var div5TH = document.createElement("div");
var div6TH = document.createElement("div");
var div7TH = document.createElement("div");
var div8TH = document.createElement("div");
var div9TH = document.createElement("div");
var div10th = document.createElement("div");

var paraGraph = document.createElement("p");



var button = body.querySelector(".card_button");
console.log(button);
console.log(h1QS);
button.addEventListener("click", function(){
    console.log("hellow world");
    document.querySelector(".card").style.display = "none";
    document.createElement("div");
})
//myQuestions[0]
//How should I grab the questions, answer and compare the answers to eachother.
var timeleft = 40;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);


var myQuestions = [
{
    question: "1. Why did Englad tax the colonies?" ,
    answers: {
        a: "Because Tea leaves went up in price.",
        b: "To pay off debt from the French and Indian Way",
        c: "Englad became greedy."
    } ,
    correctAnswer: "b"    
},
{
    question: "2.What was the first key event leading up to the American Revolution?",
    answers: {
        a: "Gettysburg.",
        b: "Battle of the Bulge.",
        c: "Boston Massacre."
    },
    correctAnswer: "c"
},
{
    question: "3.Which Battle was the turning point of the American Revolution?",
    answers: {
        a: "Battle of Yorktown.",
        b: "Battle of Saratoga",
        c: "Battle of Bunker Hill"
    },
    correctAnswer: "b"
},
{
    question: "4.What was the name of Thomas Paine's pamphlet?",
    answers:{
        a: "Vouge",
        b: "thrasher",
        c: "Common Sense"
    },
    correctAnswer: "c"
},
{
    question: "5.What English policy restricted the settlers moving westward?",
    andswers: {
        a: "Westard Proclamation",
        b: " Proclamation of 1763",
        c: "Proclamation of 1776"
    },
    correctAnswer: "b"
},
{
    question: "6.What was the first Battle of the Revolutionary War?",
    answers: {
        a: "Lexington and Concord",
        b: "Battle of Long Island",
        c: "Battle of Bunker Hill"
    },
    correctAnswer: "a"    
},
{
    question: "7.Which Southern colony did not send delegates to the First Continental Congress?",
    answers: {
        a: "Texas",
        b: "Louisana",
        c: "Georgia"        
    },
    correctAnswer: "c"
},
{
    question: "8.What battle marked the end of fighting in the American Revolution?",
    answers: {
        a: "Battle of Yorktown",
        b: "Battle of Princeton",
        c: "Battle of Bunker Hill"
    },
    correctAnswer: "a"
},
{
    question: "9.Who won the Battle of Bunker Hill?",
    answers: {
        a: "England",
        b: "the Colonies",
        c: " it was a tie"
    },
    correctAnswer: "a"
},
{
    question: "10.What was the treaty of Paris?",
    answers: {
        a: "It gave the colonies better Tea prices.",
        b: "Great Britain recognized American Independence",
        c: "There was no treaty of Paris"
    },
    correctAnswer: "b"
},
];
console.log(myQuestions[0]);
h1QS.textContent = "QUIZ TIME!!";
div1ST.textContent 

document.getElementsByClassName("card_description").innerHTML = myQuestions.join("");

document.body.append(myQuestions[0].question);
document.body.append(myQuestions[1].answers['b']);
document.body.append(myQuestions[2].answers['c']);
document.body.append(myQuestions[3].answers['b']);
document.body.append(myQuestions[4].answers['c']);
document.body.append(myQuestions[5].answers['b']);
document.body.append(myQuestions[6].answers['a']);
document.body.append(myQuestions[7].answers['c']);
document.body.append(myQuestions[8].answers['a']);
document.body.append(myQuestions[9].answers['a']);
//function startQuiz(){
  //  var quiz = [];
  //  myQuestions.forEach(
    //    (currentQuestion, questionNumber) => {
     //       var answer = [];
     //       for()
     //   }
   // )
//}
//function getQuestions(myQuestions){
   // div1ST.innerHTML = "";
    //ulCreate.innerHTML = "";

    //for (var i =0; 1 <myQuestions.length; i++){
       // var playerQuestion = myQuestions[myQuestionIndex].title;
       // var userChoices = myQuestions[myQuestionIndex].choices;
       // questionsDiv.textContent = userQuestion;
   // }
//};

//div1ST.appendChild(myQuestions);
//document.getElementById.div1ST.append(myQuestions[0]);
// function buildQuiz(){
   // var output = [];
    //myQuestions.forEach(currentQuestion, questionNumber) => {
      //  var answers = [];
      //  for(letter in currentQuestion.answers){
      //      answers.push(
      //          '<label>
      //          <input '
      //      )
      //  }
 ///   }
//}

