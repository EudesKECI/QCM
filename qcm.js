const alerts = document.getElementById("alert");
alerts.setAttribute('hidden', 'hidden');

const form = document.querySelector("form");
const questionItems = document.querySelectorAll('.question-item');
const checkButton = document.querySelector('button');


form.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher le comportement de soumission de formulaire par défaut

    // compte nbre de reponses
    let nbr_answer_correct = 0;

    questionItems.forEach(elts => {
        const selectedAnswer = elts.querySelector('input:checked');
        const isCorrect = selectedAnswer && selectedAnswer.value === 'true';

        if (isCorrect) {
            elts.classList.remove("bad");
            elts.classList.add("good");
            nbr_answer_correct++;
        } else {
            elts.classList.remove("good");
            elts.classList.add("bad");
        }
    });

    // Congratulation
    if (nbr_answer_correct === questionItems.length) {

        setInterval(() => {
            alerts.removeAttribute('hidden');
            alerts.classList.toggle("good")
        }, 1000)
    }

    else {
        // cache alert si y a une fausse reponse
        alerts.setAttribute('hidden', 'hidden');
    }
});
