const quizForm = document.querySelector(".quiz-form");
const modal = document.querySelector("#modal");
const userScoreMessage = document.querySelector("span");
const modalCloseButton = document.querySelector(".btn-modal");

const correctAnswers = ["D", "B", "C", "D"];

const getUserAnswers = () => {
  let userAnswers = []

  correctAnswers.forEach((_, index) => {
    const userAnswer = quizForm[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnswer)
  })
  return userAnswers;
};

const getUserScore = (userAnswers) => {
  let score = 0;

  userAnswers.forEach((answer, index) => {
    const isUserAnswerCorrect = answer === correctAnswers[index]
    if (isUserAnswerCorrect) {
      score += 25;
    }
  });
  return score;
};

const showFinalScore = () => {
  modal.classList.remove("d-none");
};

const animatedFinalScore = score => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    userScoreMessage.textContent = `${counter++}%`;
  }, 10);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  
  const userAnswers = getUserAnswers();
  const score = getUserScore(userAnswers);
  
  showFinalScore(score);
  animatedFinalScore(score);
}

const closeModal = () => modal.classList.add("d-none")

quizForm.addEventListener("submit", handleFormSubmit);
modalCloseButton.addEventListener("click", closeModal);
