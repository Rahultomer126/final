const questionContainers = document.querySelectorAll('.question-container');
const answers = document.querySelectorAll('.answer');
let activeAnswer = answers[0];

// Adds the visible class to the first answer and rotate class to the first toggle button
questionContainers[0].querySelector('.toggle-btn p').classList.add('rotate');
activeAnswer.classList.add('visible');

questionContainers.forEach((container, index) => {
  container.addEventListener('click', () => {
    const answer = answers[index];
    const toggleBtn = container.querySelector('.toggle-btn p');

    if (activeAnswer !== null && activeAnswer !== answer) {
      const activeToggleBtn = activeAnswer.previousElementSibling.querySelector('.toggle-btn p');
      activeToggleBtn.classList.remove('rotate');
      activeAnswer.classList.remove('visible');
    }

    toggleBtn.classList.toggle('rotate');

    if (answer.classList.contains('visible')) {
      answer.classList.remove('visible');
      activeAnswer = null;
    } else {
      answers.forEach(a => {
        a.classList.remove('visible');
      });
      answer.classList.add('visible');
      activeAnswer = answer;
    }
  });
});
