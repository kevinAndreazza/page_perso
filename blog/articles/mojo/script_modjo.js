// Afficher la date actuelle
let date = new Date();
document.getElementById("date").innerHTML = "Date actuelle: " + date.toLocaleDateString('fr-FR');


// Sélectionner tous les éléments avec la classe "question"
const questions = document.querySelectorAll('.faq .question');

// Pour chaque question
questions.forEach((question) => {
    question.addEventListener('click', () => {
        // Sélectionner la réponse qui suit directement la question
        const answer = question.nextElementSibling;
        
        // Si la réponse est visible, la cacher
        if(answer.style.display === 'block') {
            answer.style.display = 'none';
        } 
        // Si la réponse est cachée, l'afficher
        else {
            answer.style.display = 'block';
        }

        // Changer la direction de la flèche
        const arrow = question.querySelector('.arrow');
        arrow.classList.toggle('arrow-up');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseleave', () => {
            link.style.textDecoration = 'none';
        });
    });
});

