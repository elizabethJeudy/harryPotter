function submit_quiz() {
	var gryffindor = 0;
	var slytherin = 0;
	var hufflepuff = 0;
	var ravenclaw = 0;

	//get value user clicks for each question
	let q1 = document.querySelector('input[name = "wand"]:checked').value;
	let q2 = document.querySelector('input[name = "exam"]:checked').value;
	let q3 = document.querySelector('input[name = "hurt"]:checked').value;
	let q4 = document.querySelector('input[name = "duel"]:checked').value;
	let q5 = document.querySelector('input[name = "howler"]:checked').value;
	let q6 = document.querySelector('input[name = "quote"]:checked').value;
	let q7 = document.querySelector('input[name = "friends"]:checked').value;
	let q8 = document.querySelector('input[name = "skills"]:checked').value;
	let q9 = document.querySelector('input[name = "quidditch"]:checked').value;
	let q10 = document.querySelector('input[name = "animal"]:checked').value;
	let q11 = document.querySelector('input[name = "saturday"]:checked').value;
	let q12 = document.querySelector('input[name = "erised"]:checked').value;
	let q13 = document.querySelector('input[name = "events"]:checked').value;
	let q14 = document.querySelector('input[name = "spell"]:checked').value;
	let q15 = document.querySelector('input[name = "hallow"]:checked').value;
	let q16 = document.querySelector('input[name = "path"]:checked').value;
	let q17 = document.querySelector('input[name = "house"]:checked').value;

	// keeps track of answers to question
	if (q1 == "gryffindor") {
		gryffindor += 1;
	} else if (q1 == "slytherin") {
		slytherin += 1;
	} else if (q1 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q1 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q2 == "gryffindor") {
		gryffindor += 1;
	} else if (q2 == "slytherin") {
		slytherin += 1;
	} else if (q2 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q2 == "ravenclaw") {
		ravenclaw += 1;
	}

	if (q3 == "gryffindor") {
		gryffindor += 1;
	} else if (q3 == "slytherin") {
		slytherin += 1;
	} else if (q3 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q3 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q4 == "gryffindor") {
		gryffindor += 1;
	} else if (q4 == "slytherin") {
		slytherin += 1;
	} else if (q4 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q4 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q5 == "gryffindor") {
		gryffindor += 1;
	} else if (q5 == "slytherin") {
		slytherin += 1;
	} else if (q5 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q5 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q6 == "gryffindor") {
		gryffindor += 1;
	} else if (q6 == "slytherin") {
		slytherin += 1;
	} else if (q6 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q6 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q7 == "gryffindor") {
		gryffindor += 1;
	} else if (q7 == "slytherin") {
		slytherin += 1;
	} else if (q7 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q7 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q8 == "gryffindor") {
		gryffindor += 1;
	} else if (q8 == "slytherin") {
		slytherin += 1;
	} else if (q8 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q8 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q9 == "gryffindor") {
		gryffindor += 1;
	} else if (q9 == "slytherin") {
		slytherin += 1;
	} else if (q9 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q9 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q10 == "gryffindor") {
		gryffindor += 1;
	} else if (q10 == "slytherin") {
		slytherin += 1;
	} else if (q10 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q10 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q11 == "gryffindor") {
		gryffindor += 1;
	} else if (q11 == "slytherin") {
		slytherin += 1;
	} else if (q11 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q11 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q12 == "gryffindor") {
		gryffindor += 1;
	} else if (q12 == "slytherin") {
		slytherin += 1;
	} else if (q12 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q12 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q13 == "gryffindor") {
		gryffindor += 1;
	} else if (q13 == "slytherin") {
		slytherin += 1;
	} else if (q13 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q13 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q14 == "gryffindor") {
		gryffindor += 1;
	} else if (q14 == "slytherin") {
		slytherin += 1;
	} else if (q14 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q14 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q15 == "gryffindor") {
		gryffindor += 1;
	} else if (q15 == "slytherin") {
		slytherin += 1;
	} else if (q15 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q15 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q16 == "gryffindor") {
		gryffindor += 1;
	} else if (q16 == "slytherin") {
		slytherin += 1;
	} else if (q16 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q16 == "ravenclaw") {
		ravenclaw += 1;
	}
	if (q17 == "gryffindor") {
		gryffindor += 1;
	} else if (q17 == "slytherin") {
		slytherin += 1;
	} else if (q17 == "hufflepuff") {
		hufflepuff += 1;
	} else if (q17 == "ravenclaw") {
		ravenclaw += 1;
	}

	// displays score when submit is clicked
	alert(
		"gryffindor: " +
			gryffindor +
			"\nslytherin: " +
			slytherin +
			"\nhufflepuff: " +
			hufflepuff +
			"\nravenclaw: " +
			ravenclaw
	);
}
