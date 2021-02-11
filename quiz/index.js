var myQuestions = [
    {
      question: "WWW is based on which model?",
      answers: {
        a: 'Client Server',
        b: 'Local Server',
        c: 'none'
      },
      correctAnswer: 'b'
    },
    {
      question: "Who is the inventor of Supercomputer?",
      answers: {
        a: 'lincon',
        b: 'Seymour Cray',
        c: 'trump'
      },
      correctAnswer: 'b'
    },
    {
      question: "Full form of www ?" ,
      answers: {
        a: 'world widest website',
        b: 'world wide website',
        c: 'world wide web'
      },
      correctAnswer: 'c'
    },
    {
        question: "Which tag gives the size largest?",
        answers: {
          a: 'h1',
          b: 'h2',
          c: 'h6',
          d: 'h3'
        },
        correctAnswer: 'a'
      },
      {
        question: "CSS Stands for?",
        answers: {
          a: 'Cascading Style Sheets',
          b: 'Control set style',
          c: 'Cascading Style Sheets',
          d: 'None of the above'
        },
        correctAnswer: 'c'
      },
      {
        question: "What layer in the TCP/IP stack is equivalent to the Transport layer of the OSI model?",
        answers: {
          a: 'Application',
          b: 'Internet',
          c: 'Network Access',
          d: 'Host to Host'
        },
        correctAnswer: 'c'
      },
      {
        question: "Which is a reserved word in the Java programming language?",
        answers: {
          a: '	method',
          b: 'native',
          c: 'subclasses',
          d: 'array'
        },
        correctAnswer: 'b'
      },
      {
        question: "Which of the following special symbol allowed in a variable name?",
        answers: {
          a: '_ (underscore)',
          b: '- (hyphen)',
          c: '| (pipeline)',
          d: '* (asterisk)'
        },
        correctAnswer: 'd'
      },
      {
        question: "Which is a valid keyword in java?",
        answers: {
          a: 'interface',
          b: 'string',
          c: 'Float',
          d: 'unsigned'
        },
        correctAnswer: 'a'
      },
    {
        question: "By default a real number is treated as a",
        answers: {
          a: 'float',
          b: 'double',
          c: 'long double',
          d: 'far double'
        },
        correctAnswer: 'b'
      },
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'darkgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'darkred';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }