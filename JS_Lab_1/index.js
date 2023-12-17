function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0;
}
function Question(questionText,choices,answer){
    this.questionText=questionText;
    this.answer=answer;
    this.choices=choices;
}

Quiz.prototype.isEnded=function(){
    return this.questionIndex===this.questions.length;
}

Quiz.prototype.getQuestionByIndex=function(){
    return this.questions[this.questionIndex];
}

Question.prototype.isCorrectAnswer=function(userAnswer){
    return this.answer===userAnswer;
}
Quiz.prototype.checkOptionWithAnswer = function(answer){
    if(this.getQuestionByIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}
let questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];
let quiz = new Quiz(questions);
function loadQuestions(){
    if(quiz.isEnded()){
      showScores();
    }else{
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionByIndex().questionText;
        
        console.log(quiz.getQuestionByIndex().questionText);
        console.log(quiz.getQuestionByIndex().answer);

        var choices= quiz.getQuestionByIndex().choices;
        for(var i=0; i< choices.length;i++){
           
            var element = document.getElementById("choice"+i);
            element.innerHTML=choices[i];
            handleButton("btn" + i,choices[i]);
        }
        showProgress();
    }
};
function showProgress() {
  var element = document.getElementById("progress");
    element.innerHTML = "Question " + (quiz.questionIndex+1) + " of " + quiz.questions.length;
  };
  function handleButton(btni,choices) {
    var button = document.getElementById(btni);
      button.onclick = function(){
        quiz.checkOptionWithAnswer(choices);
        loadQuestions();
      }
    };
function  showScores(){
   var resultHTML="<h1>Result</h1><hr></br><h2>Your score is "+ quiz.score +  ".And mark percentage is: "+(quiz.score/questions.length*100)+"%"+"</h2>"; 
   document.getElementById("quiz").innerHTML=resultHTML ;
}

loadQuestions();