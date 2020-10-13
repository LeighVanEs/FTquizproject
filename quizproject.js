 



//else if (ans == questions[currentQuestion].answer){
	//curentQuestion++;
	//loadQuestion();
	//clearInterval(downloadTimer);




var currentQuestion = 0; // the question we are currently on
var score = 0; // number of correct answers

var timeleft = 20; // time left for countdown timer
var stopTimer = false;
var countdownTimer;


// questions is an array of question objects
var questions = [
   {
	"question": "In what year did the show first air?",
	"a": "1969",
	"b": "1971",
	"c": "1966",
	"d": "1975",
	"image":"quizimages/q1.jpg",
	"answer": "d"
   },
   
	{
	"question": "Which actor plays Basil Fawlty?",
	"a": "Tom Georgeson",
	"b": "Kevin Kline",
	"c": "John Cleese",
	"d": "Andrew Sachs",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   },
   
	{
	"question": "Where is Manuel from?",
	"a": "Barcelona",
	"b": "Seville",
	"c": "Bilbao",
	"d": "Madrid",
	"image":"quizimages/q3.jpg",
	"answer": "a"
   },
      {
	"question": "Which salad is Basil flummoxed by?",
	"a": "Chef",
	"b": "Michigan",
	"c": "Waldorf",
	"d": "Tuna",
	"image":"quizimages/q4.jpg",
	"answer": "c"
   },
   
	{
	"question": "Which one of the following is NOT a quote by Basil Fawlty?",
	"a": "Coming my little piranha fish.",
	"b": "Perhaps it would be simplest to have him put to S-L-E-E-P.",
	"c": "Why don't you have another vat of wine, dear?",
	"d": "A satisfied customer. We should have him stuffed.",
	"image":"quizimages/q5.jpg",
	"answer": "b"
   },
	
	{
	"question": "Which one of these is NOT the name of an episode on the show?",
	"a": "Basil the Rat",
	"b": "The Germans",
	"c": "A Hint of Class",
	"d": "The Kipper and the Corpse",
	"image":"quizimages/q6.jpg",
	"answer": "c"
   },
   
   {
	"question": "In the second episode, who (or what) does Sybil put in charge of the front desk?",
	"a": "Miss Gatsby and Miss Tibbs.",
	"b": "Major Gowen",
	"c": "the taxidermied moose head",
	"d": "the garden gnome",
	"image":"quizimages/q7.jpg",
	"answer": "d"
   },
   
   {
	"question": "Which of these is NOT one of Basil's pet names for Sybil?",
	"a": "brilliantined stick insect",
	"b": "sabre-toothed tart",
	"c": "my little workhorse",
	"d": "golfing puff adder",
	"image":"quizimages/q8.jpg",
	"answer": "a"
   },
   
   {
	"question": "In Gourmet Night, which one of these meals is actually on the menu?",
	"a": "duck with cabbage",
	"b": "duck with cherries",
	"c": "duck with rosemary",
	"d": "duck with lemon",
	"image":"quizimages/q9.jpg",
	"answer": "b"
   },
   
   {
	"question": "Who is the chef at the hotel?",
	"a": "Tripp Hugh",
	"b": "Trevor Hugh",
	"c": "Terry Hugh",
	"d": "Truett Hugh",
	"image":"quizimages/q10.jpg",
	"answer": "c"
   },
   
   {
	"question": "What is the date of the Fawltys' anniversary?",
	"a": "April 17th",
	"b": "August 17th",
	"c": "April 15th",
	"d": "August 16th",
	"image":"quizimages/q11.jpg",
	"answer": "a"
   },
   
   {
   "question": "To what breed of hamster does Manuel's rat actually belong?",
	"a": "Roborovski Dwarf Hamster",
	"b": "Golden Hamster",
	"c": "Siberian Hamster",
	"d": "Djungarian Dwarf Hamster",
	"image":"quizimages/q12.jpg",
	"answer": "c"
   },
   
    {
   "question": "Basil prefers _____, while Sybil prefers _____, to fix up the hotel. Which names correctly fill in the blanks?",
	"a": "Ables, O'Reilly ",
	"b": "Stubbs, O'Reilly",
	"c": "O'Reilly, Ables",
	"d": "O'Reilly, Stubbs",
	"image":"quizimages/q13.jpg",
	"answer": "d"
   },
   
   {
   "question": "Where is Fawlty Towers set?",
	"a": "Appledore",
	"b": "Torquay",
	"c": "Barton",
	"d": "Broseley",
	"image":"quizimages/q14.jpg",
	"answer": "b"
   },
   
   {
   "question": "Finally, what is the last line delivered in the final episode, and who said it?",
	"a": "Hello, Fawlty Towers. - Basil",
	"b": "Let us just float on the satisfaction of time well spent. - Sybil",
	"c": "I'm sorry, we're closed. - Basil",
	"d": "I'm afraid it's started to rain again. - Sybil",
	"image":"quizimages/q15.jpg",
	"answer": "d"
   }
   
];


// register the service worker when the js loads
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}


 
 
 //run code when the body loads
function initialize() {
	 document.getElementById("lightbox").style.display="none";
	 loadQuestion();
};



var markA = function() { markIt('a');};
var markB = function() { markIt('b');};
var markC = function() { markIt('c');};
var markD = function() { markIt('d');};




	
	//load the current question on the page
 function loadQuestion() {
	
	//check for last question
	let message = "";
	stopTimer = false;

	
	 
	 
	 if (currentQuestion == questions.length) {
		
		if (score == 15 || score == 14) {
			message = "Congrats! You have finished the quiz with a score of " + score + " / " + questions.length +
			". " + "<br>" + "Five stars! You're Sybil!" + "<br>" + 
			"Click to start again.";
			//document.getElementById("lightbox").style.backgroundSize = "cover";
			//document.getElementById("lightbox").style.backgroundColor = "#2E3836";
			}
			
		else if (score == 13 || score == 12) {
			message = "Congrats! You have finished the quiz with a score of " + score + " / " + questions.length +
			". " + "<br>" + "Four-and-a-half stars! You're Polly" + "<br>" + 
			"Click to start again.";
			//document.getElementById("lightbox").style.backgroundSize = "cover";
			//document.getElementById("lightbox").style.backgroundColor = "#D9BFC1";
			}	
			
			
		else if (score == 11 || score == 10) {
			message = "You finished the quiz with a score of " + score + " / " + questions.length +
			". " + "<br>" + "Well done Andre! Three-and-a-half stars!" + "<br>" + 
			"Click to start again.";
			//document.getElementById("lightbox").style.backgroundSize = "cover";
			//document.getElementById("lightbox").style.backgroundColor = "#B47E84";
			}

		
			
		else if (score == 9 || score == 8) {
			message = "You finished the quiz with a score of " + score + " / " + questions.length +
			". " + "<br>" + "You're Manuel. Here's three stars." + "<br>" + 
			"Click to start again.";
			//document.getElementById("lightbox").style.objectFit = "cover";
			//document.getElementById("lightbox").style.backgroundColor = "#9D5C63";
			}

		
		else if (score == 7 || score == 6) {
			message = "You finished the quiz with a score of " + score + " / " + questions.length +
			". " + "<br>" + "Hey Basil! Two-and-a-half stars." + "<br>" + 
			"Click to start again.";
			//document.getElementById("lightbox").style.objectFit = "cover";
			//document.getElementById("lightbox").style.backgroundColor = "#546461";
			}

		
		else if (score == 5 || score == 4) {
			message = "You finished the quiz with a score of " + score + " / " + questions.length +
			". " + "<br>" + "Two stars for you, Major Gowan!" + "<br>" + 
			"Click to start again.";
			//document.getElementById("lightbox").style.objectFit = "cover";
			//document.getElementById("lightbox").style.backgroundColor = "#7A918D";
			}


		else if (score == 3 || score == 2) {
			message = "You finished the quiz with a score of " + score + " / " + questions.length +
			". " + "<br>" + "One-and-a-half stars. Get out Melbury!" + "<br>" + 
			"Click to start again.";
			//document.getElementById("lightbox").style.objectFit = "cover";
			//document.getElementById("lightbox").style.backgroundColor = "#B1BEBC";
			}

		
		else{
			message = "You finished the quiz with a score of " + score + " / " + questions.length +
			". " + "<br>" + "Ouch.  Enjoy your single star." + "<br>" + 
			"Click to start again.";
			//document.getElementById("lightbox").style.objectFit = "cover";
			//document.getElementById("lightbox").style.backgroundColor = "#D3DAD9";
				
			
		//show the lightbox with feedback
				//document.getElementById("lightbox").style.display = "block";
			//document.getElementById("message").innerHTML = message;
		//score = 0;
		//document.getElementById("score").innerHTML = "0";
		
		}
		
		//show the lightbox with feedback
	 document.getElementById("lightbox").style.display = "block";
	 document.getElementById("message").innerHTML = message;
	 currentQuestion = 0;
	 score = 0;
	 document.getElementById("score").innerHTML = "0";
		
		
}
	 
	  // preload the image
		var img = document.getElementById("image");
		var preLoadImg = new Image();
		preLoadImg.src = questions[currentQuestion].image;
		
		preLoadImg.onLoad = function () {
			img.width = this.width;
		}
		img.style.maxWidth = "500px";
		img.src = preLoadImg.src;
	 
	//load the question
	 document.getElementById("question").innerHTML = questions[currentQuestion].question;
	  
	 document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
	  document.getElementById("a").addEventListener("click",markA);
	 
	 document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
	 document.getElementById("b").addEventListener("click",markB);
	 
	 document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
	 document.getElementById("c").addEventListener("click",markC);
	 
	 document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	 document.getElementById("d").addEventListener("click",markD);
	 
	 //document.getElementById("image").src = questions[currentQuestion].image;
	 stopTimer = false;
	 startTimer();
   
 } // loadQuestion
 
 
  function activateLifeline(){
	  
	 //document.getElementById("lifeLine").innerHTML = messages;
	 //document.getElementById("lifeLine").innerHTML = messages;
	 //messages = "Click here for a lifeline.";
	 
	 if(currentQuestion == 0) {
		 document.getElementById("a").innerHTML = "";
		 document.getElementById("a").removeEventListener("click", markA);
			 //event.preventDefault()
		// });
	 }
	 
	 else if(currentQuestion == 1) {
		 document.getElementById("d").innerHTML = "";
		 document.getElementById("d").removeEventListener("click", markD);
	}
	 
	 else if(currentQuestion == 2) {
		document.getElementById("d").innerHTML = "";
		document.getElementById("d").removeEventListener("click", markD);
	 }
	 
	 
	 else if(currentQuestion == 3) {
		 document.getElementById("d").innerHTML = "";
		document.getElementById("d").removeEventListener("click", markD);
	}
	 
	 else if(currentQuestion == 4) {
		 document.getElementById("d").innerHTML = "";
		document.getElementById("d").removeEventListener("click", markD);
	 }
	 
	 else if(currentQuestion == 5) {
		 document.getElementById("b").innerHTML = "";
		document.getElementById("b").removeEventListener("click", markB);
	 }
	 
	 else if(currentQuestion == 6) {
		 document.getElementById("b").innerHTML = "";
		document.getElementById("b").removeEventListener("click", markB);
	}
	 
	 else if(currentQuestion == 7) {
		 document.getElementById("c").innerHTML = "";
		document.getElementById("c").removeEventListener("click", markC);
	}
	 
	 else if(currentQuestion == 8) {
		 document.getElementById("a").innerHTML = "";
		document.getElementById("a").removeEventListener("click", markA);
	}
	 
	 else if(currentQuestion == 9) {
		 document.getElementById("b").innerHTML = "";
		document.getElementById("b").removeEventListener("click", markB);
	 }
	 
	 else if(currentQuestion == 10) {
		 document.getElementById("c").innerHTML = "";
		document.getElementById("c").removeEventListener("click", markC);
	 }
	 
	 else if(currentQuestion == 11) {
		 document.getElementById("a").innerHTML = "";
		document.getElementById("a").removeEventListener("click", markA);
	 }
	 
	  else if(currentQuestion == 12) {
		 document.getElementById("c").innerHTML = "";
		document.getElementById("c").removeEventListener("click", markC);
	 }
	
	 else if(currentQuestion == 13) {
		 document.getElementById("c").innerHTML = "";
		document.getElementById("c").removeEventListener("click", markC);
	}
	 
	  else {
		 document.getElementById("c").innerHTML = "";
	 document.getElementById("c").removeEventListener("click", markC);
	 }
 }
 
 
 //start the timer
 function startTimer(){
	 if(currentQuestion == 0) {
		 timeleft = 20;
	 }
	 
	 else {
		 timeleft = 20;
	 }
	 countdownTimer = setInterval (function() {
		 document.getElementById ("countdown").innerHTML = timeleft + " seconds remaining";
		 timeleft -= 1;
		 endTimer();
		 
	 }, 1000);
 }//startTimer
 
 
 //end the timer
 function endTimer() {
	 if(timeleft < 0 || stopTimer) {
		 clearInterval (countdownTimer);
		 currentQuestion++; //add 1 to currentQuestion
		 loadQuestion();
	 }
 }//EndTimer
 
 
 // Move to next question
 function nextQuestion() {
	 //check for last question
	let message = "";
	stopTimer = true;
	//currentQuestion++;
	//loadQuestion();
 }
 
 
 
 
 
 //mark the current question
 function markIt(ans) {
	 let message = "";
	 
	 // if the answer is correct add to the score and move to next question
	 if (ans == questions[currentQuestion].answer) {
		
		
		
		//add to the score and move to next question
		score = score + 1; // or score++ or score +=1
		document.getElementById("score").innerHTML = score + " / " + questions.length;
		
		message = "Correct answer! Your score is " + score + " / " + questions.length;
		//document.getElementById("lightbox").style.backgroundColor = "#7A918D";
	}
	 
	
	// otherwise notify the user is incorrect
	else {
		message = "Incorrect answer! Your score is " + score + " / " + questions.length;
		
		
	score = score; // or score++ or score +=1
		document.getElementById("score").innerHTML = score + " / " + questions.length;
		
		//document.getElementById("lightbox").style.backgroundColor = "#9D5C63";
	
	
	} //else

		
	// show the lightbox with feedback
		 document.getElementById("lightbox").style.display="block";
		 document.getElementById("message").innerHTML = message;
		 
	
	//move to the next question
	stopTimer = true;
	endTimer();
	
 }  // markIt
   
 //close the lightbox
 function closeLightBox() {
	 document.getElementById("lightbox").style.display = "none";
	
 } //closeLightbox
 
