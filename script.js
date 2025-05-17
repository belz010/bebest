const quizzes = [
  {
    q: "1. What is 5 + 7?",
    options: ["10", "11", "12", "13"],
    answer: "12"
  },
  {
    q: "2. What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8"
  },
  {
    q: "3. Solve: 3x = 12. What is x?",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    q: "4. What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    answer: "30"
  },
  {
    q: "5. What is the perimeter of a square with side 6 cm?",
    options: ["12 cm", "18 cm", "24 cm", "36 cm"],
    answer: "24 cm"
  },
  {
    q: "6. What is the area of a triangle with base 10 and height 5?",
    options: ["25", "30", "35", "40"],
    answer: "25"
  },
  {
    q: "7. What is 9 × 8?",
    options: ["72", "81", "64", "69"],
    answer: "72"
  },
  {
    q: "8. Simplify: 2 + 3 × 4",
    options: ["14", "20", "24", "18"],
    answer: "14"
  },
  {
    q: "9. What is the next prime number after 7?",
    options: ["8", "9", "10", "11"],
    answer: "11"
  },
  {
    q: "10. Solve: 10 - (3 + 2)",
    options: ["3", "5", "10", "15"],
    answer: "5"
  },
  {
    q: "11. Which is greater: 2/3 or 3/5?",
    options: ["2/3", "3/5", "Equal", "Can't determine"],
    answer: "2/3"
  },
  {
    q: "12. What is 100 divided by 4?",
    options: ["20", "25", "30", "40"],
    answer: "25"
  },
  {
    q: "13. What is the value of π (approx)?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    answer: "3.14"
  },
  {
    q: "14. Solve: (2 + 3)²",
    options: ["10", "25", "15", "9"],
    answer: "25"
  },
  {
    q: "15. What is 0.5 as a fraction?",
    options: ["1/4", "1/2", "1/3", "2/3"],
    answer: "1/2"
  },
  {
    q: "16. Find x: x + 5 = 10",
    options: ["2", "3", "5", "10"],
    answer: "5"
  },
  {
    q: "17. What is the cube of 3?",
    options: ["9", "18", "27", "30"],
    answer: "27"
  },
  {
    q: "18. What is 1/4 of 80?",
    options: ["10", "15", "20", "25"],
    answer: "20"
  },
  {
    q: "19. If y = 2x and x = 4, what is y?",
    options: ["4", "6", "8", "10"],
    answer: "8"
  },
  {
    q: "20. What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2"
  }
];

const quizContainer = document.getElementById("quizzes");

quizzes.forEach((quiz, index) => {
  const div = document.createElement("div");
  div.className = "quiz-box";

  const question = document.createElement("div");
  question.className = "question";
  question.textContent = quiz.q;
  div.appendChild(question);

  quiz.options.forEach(option => {
    const label = document.createElement("label");
    label.style.display = "block";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = q${index};
    radio.value = option;

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + option));
    div.appendChild(label);
  });

  const button = document.createElement("button");
  button.textContent = "Submit";
  const feedback = document.createElement("div");
  feedback.className = "feedback";

  button.onclick = () => {
    const selected = document.querySelector(input[name="q${index}"]:checked);
    if (!selected) {
      feedback.textContent = "Please select an answer.";
      feedback.style.color = "gray";
    } else if (selected.value === quiz.answer) {
      feedback.textContent = "✅ Correct!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = ❌ Incorrect. Correct answer: ${quiz.answer};
      feedback.style.color = "red";
    }
  };

  div.appendChild(button);
  div.appendChild(feedback);
  quizContainer.appendChild(div);
});