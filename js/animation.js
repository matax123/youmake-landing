const section = document.getElementById('card-plan');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate'); // Agregamos la clase 'animate' cuando el elemento entra en pantalla
      observer.unobserve(entry.target); // Dejamos de observar el elemento una vez que ha entrado en pantalla
    }
  });
}, { threshold: 0.5 }); // Puedes ajustar el valor del umbral (threshold) según tus necesidades

observer.observe(section);