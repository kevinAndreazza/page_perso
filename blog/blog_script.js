// Exemple de données d'article de blog
let blogData = [
    {
        title: "Un Mystère Dévoilé : les Boucles en Programmation",
        image: "https://sparkbox.com/uploads/featured_images/e-muller_20-05.png",
        preview: "Il y a un dicton populaire dans le monde de la programmation : 'Ne vous fatiguez pas, automatisez-le !'...",
        date: new Date('2023-05-18'),
        link: "articles/boucles/boucles.html"
    },
    {
        title: "Mojo: le nouveau langage de programmation qui revolutionne l'IA",
        image: "https://docs.modular.com/static/images/mojo-social-card.png",
        preview: "Bienvenue dans le monde du nouveau langage de programmation Mojo, conçus comme une extension du...",
        date: new Date('2023-05-18'),
        link: "articles/mojo/modjo.html"
    },
    {
        title: "Plonger dans le Monde des Types de Données en Programmation",
        image: "https://www.openmindt.com/wp-content/uploads/2019/11/Openmind-Technologie-Big-Data-H.jpg",
        preview: "Ah, la programmation! C'est un univers de logique et de créativité, où chaque ligne de code compte. Mais, savez-vous...",
        date: new Date('2023-05-18'),
        link: "articles/types_de_donnees/types_de_donnees.html"
    },
    // Plus d'articles...
];

// Trier les données du blog par date de parution
blogData.sort((a, b) => b.date - a.date);

// Insérer les articles dans le conteneur du blog
let blogContainer = document.getElementById('blog-container');
blogData.forEach(article => {
    let blogItem = document.createElement('a');
    blogItem.href = article.link;
    blogItem.classList.add('blog-item');

    let image = document.createElement('img');
    image.src = article.image;
    blogItem.appendChild(image);

    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = article.title;
    blogItem.appendChild(title);

    let preview = document.createElement('div');
    preview.classList.add('preview');
    preview.textContent = article.preview;
    blogItem.appendChild(preview);

    blogContainer.appendChild(blogItem);
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
