const button = document.getElementById("modalButton");

    const disableButton = (event) => {
        console.log(event.currentTarget);
      event.currentTarget.disabled = true;
      
    };

button.addEventListener("click", disableButton);

// Sélectionnez votre élément de barre de navigation
const navbar = document.querySelector('.navbar');

function updateNavbarStyle() {
  const scrollY = window.scrollY || window.pageYOffset;

  const scrollThreshold = 100;

  if (scrollY > scrollThreshold) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  } else {
    navbar.style.backgroundColor = 'white';
  }
}

window.addEventListener('scroll', updateNavbarStyle);

updateNavbarStyle();
