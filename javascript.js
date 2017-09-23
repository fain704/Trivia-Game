$(document).ready(function(){
	//Variables
	var count = 60;
	var intervalId;
	var right = 0;
	var wrong = 0;
	var unanswered = 0;
	var answer=[];
	var key=[false, true, true, true, true, false, true, true, true];

	//initialize HTML div content.
	$("#timer").html("<h1 class = 'text-center'>" + count + " Seconds</h1>");
	$("#questions").html("<button class='btn btn-primary btn-block' id = 'start'>Start</button>");


	//Timer start function.
	function timer(){
		intervalId = setInterval(decrement, 1000);
	}


	//count (decrement).
	function decrement() {
		count--;
		$("#timer").html("<h1 class = 'text-center'>" + count + " Seconds</h1>");
		if (count ===0) {
			timerStop();
			tallyAnswers();
		}
	}

	//fill questions div with questions
	function questions(){
		$("#questions").html("");
	};


	//Timer stop function ().
	function timerStop(){
		clearInterval(intervalId);
		tallyAnswers();
	}


	//Tally answers
	function tallyAnswers(){
		for (var i = 0; i < answer.length; i++) {
			if (answer[i] === key[i]) {
				right++;
			} else if (answer[i] !== key[i]){
				wrong++;
			}
		}
		console.log("answers will now be tallied");
		console.log("right" + right);
		console.log("wrong" + wrong);
		console.log("unanswered" + unanswered);

		$("#questions").html('');
		$("#submit").html('');

		$("#questions").html('<h1 class = "text-center"> Correct: ' + right + ' Wrong: ' + wrong + '</h1>');

	}


	//evaluate win loss (fired off when timer runs out or submit button clicked)
	function winLoss(){

	}

	function questions(){
		$("#questions").html('<p class="text-center">function alert(){<br>alert("Hello World!");<br>}<br>Will the alert pop up?</p><button class="btn btn-secondary btn-block" id="q1aT">Yes</button><button class="btn btn-secondary btn-block" id="q1aF">No</button><p class="text-center">function alert(){<br>alert("Hello World!")<br>}<br>if(true){<br>alert();<br>}<br>Will it alert now?</p><button class="btn btn-secondary btn-block" id="q2aT">Yes</button><button class="btn btn-secondary btn-block" id="q2aF">No</button><p class="text-center">A variable can contain a value in the form of a string, number, or array.                                </p><button class="btn btn-secondary btn-block" id="q3aT">True</button><button class="btn btn-secondary btn-block" id="q3aF">False</button><p class="text-center">Variables are function scoped, while let and const are block scoped.</p><button class="btn btn-secondary btn-block" id="q4aT">True</button><button class="btn btn-secondary btn-block" id="q4aF">False</button><p class="text-center">variables declared locally cannott be referenced globally, but variables declared globally can be referenced locally.</p><button class="btn btn-secondary btn-block" id="q5aT">True</button><button class="btn btn-secondary btn-block" id="q5aF">False</button><p class="text-center">functions by themselves will never run, they have to be called.</p><button class="btn btn-secondary btn-block" id="q6aT">True</button><button class="btn btn-secondary btn-block" id="q6aF">False</button><p class="text-center">setInterval() takes two arguments, the function to be fired, and the interval of time at which it should be fired.</p><button class="btn btn-secondary btn-block" id="q7aT">True</button><button class="btn btn-secondary btn-block" id="q7aF">False</button><p class="text-center">Switchcase and for loops are similiar in capabilities.</p><button class="btn btn-secondary btn-block" id="q8aT">True</button><button class="btn btn-secondary btn-block" id="q8aF">False</button><p class="text-center">JavaScript is awesome.</p><button class="btn btn-secondary btn-block" id="q9aT">True</button><button class="btn btn-secondary btn-block" id="q9aF">False</button>')
		}



	function submit(){
		$("#submit").html('<button class="btn btn-primary btn-block" id="submit-btn">submit</button>')
	}
	// function submit(){
	// 	$("")
	// }
	//on clink of start button do:
		//remove start button
		//fill questions div
		//fill submit button div
		//start timer

	$("#start").on("click",function(){
		$("#questions").html('');
		timer();
		questions();
		submit();

		$("#q1aT").on("click", function(){
				answer[0] = true;
				console.log(answer[0]);
		});

		$("#q1aF").on("click", function(){
				answer[0] = false;
				console.log(answer[0]);
		});

		$("#q2aT").on("click", function(){
				answer[1] = true;
				console.log(answer[1]);
		});

		$("#q2aF").on("click", function(){
				answer[1] = false;
				console.log(answer[1]);
		});

		$("#q3aT").on("click", function(){
				answer[2] = true;
				console.log(answer[2]);
		});

		$("#q3aF").on("click", function(){
				answer[2] = false;
				console.log(answer[2])
		});

		$("#q4aT").on("click", function(){
				answer[3] = true;
				console.log(answer[3]);
		});

		$("#q4aF").on("click", function(){
				answer[3] = false;
				console.log(answer[3]);
		});

		$("#q5aT").on("click", function(){
				answer[4] = true;
				console.log(answer[4]);
		});

		$("#q5aF").on("click", function(){
				answer[4] = false;
				console.log(answer[4]);
		});

		$("#q6aT").on("click", function(){
				answer[5] = true;
				console.log(answer[5]);
		});

		$("#q6aF").on("click", function(){
				answer[5] = false;
				console.log(answer[5]);
		});

		$("#q7aT").on("click", function(){
				answer[6] = true;
				console.log(answer[6]);
		});

		$("#q7aF").on("click", function(){
				answer[6] = false;
				console.log(answer[6]);
		});

		$("#q8aT").on("click", function(){
				answer[7] = true;
				console.log(answer[7]);
		});

		$("#q8aF").on("click", function(){
				answer[7] = false;
				console.log(answer[7]);
		});

		$("#q9aT").on("click", function(){
				answer[8] = true;
				console.log(answer[8]);
		});

		$("#q9aF").on("click", function(){
				answer[8] = false;
				console.log(answer[8]);
		});


		$("#submit-btn").on("click", function(){
				timerStop();
		});

	});


});


