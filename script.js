// asks for name at welcome page

let userInput = prompt(
	"Welcome to the Wizarding World! Please use your name as the password to enter"
);
if (userInput != null) {
	alert("You may enter!");
}
let userName = document.querySelector(".user-name");
userName.textContent = userInput;
// selectors for card box
let quizBtn = document.querySelector(".quiz-btn");
let cardInfo = document.querySelector(".card-info");
let continBtn = document.querySelector(".continue-btn");

//when quiz button click (discover you house)
quizBtn.onclick = () => {
	cardInfo.classList.add("activeInfo");
};
