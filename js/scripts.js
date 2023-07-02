// Variables globales
var $searchInput, isResizing, $logoSVG, originalWidth, originalViewBox, checkbox, menu;

document.addEventListener("DOMContentLoaded", function() {
  // Inicialización de variables globales
  $searchInput = $('.search-container-input');
  isResizing = false;
  $logoSVG = $('.logo');
  originalWidth = $logoSVG.attr('width');
  originalViewBox = $logoSVG.attr('viewBox');
  checkbox = document.getElementById('checkbox');
  menu = document.getElementById('flex-container');

  // Función para cambiar la posición de la barra de búsqueda en el DOM
  function moveNavContainer() {
    let windowWidth = window.innerWidth;
    let searchContainer = document.querySelector(".search-container");
    let flexContainer = document.querySelector(".flex-container-searchbar");
    let originalContainer = document.querySelector(".search-container-returnjs");
    
    let flexContainer2 = document.querySelector(".flex-container");
    let originalFlexContainer = document.querySelector(".header-2");
    let destinoflexcontainer = document.querySelector(".header-nav");

    if (windowWidth < 768) {
      flexContainer.appendChild(searchContainer);
      destinoflexcontainer.appendChild(flexContainer2);
    } else {
      originalContainer.appendChild(searchContainer);
      originalFlexContainer.appendChild(flexContainer2);
    }
  }

  // Función para actualizar el tamaño del logo
  function updateLogoSize() {
    var windowWidth = $(window).width();
    var originalViewBoxArray = originalViewBox.split(' ');
    var newViewBox = '0 0 112 ' + originalViewBoxArray[3];

    if (windowWidth < 421) {
      $logoSVG.attr('width', '112px');
      $logoSVG.attr('viewBox', newViewBox);
    } else {
      $logoSVG.attr('width', originalWidth);
      $logoSVG.attr('viewBox', originalViewBox);
    }
  }

  // Media query para monitorear cuando el ancho de pantalla es menor a 768px
  var mediaQuery = window.matchMedia("(max-width: 768px)");

  // Función a ejecutar en caso de que la media query sea true
  function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
      moveNavContainer();
      updateLogoSize();
    } else {
      // Código para casos donde la media query sea false
    }
  }

  // Ejecuta la función inicialmente para verificar el estado actual de la media query
  handleMediaQueryChange(mediaQuery);

  // Añade un listener al evento de cambio en la media query
  mediaQuery.addEventListener('change', handleMediaQueryChange);

  // Función para mostrar los items de la barra de navegación cuando cambie el tamaño de pantalla
  function checkWindowSize() {
    if (window.innerWidth > 767) {
      menu.style.display = 'flex';
    }
  }

  checkWindowSize();

//funcion del menu de hamburguesa
function toggleMenu() {
  // Obtiene las referencias a los elementos del DOM
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('flex-container');
  const body = document.body;
  // Función que se ejecuta cuando se hace clic fuera del menú
  const handleClickOutsideMenu = (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      toggle.classList.remove('active');
      menu.classList.remove('active');
      body.classList.remove('menu-open');
    }
  };

  // Asigna la función al evento 'click' del botón de alternancia
  toggle.onclick = () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('menu-open');
  };

  // Agrega el evento 'click' al documento, para detectar los clics fuera del menú
  document.addEventListener('click', handleClickOutsideMenu);
}
toggleMenu();

function toggleSubMenu() {
  var subMenu = document.getElementById("sub-menu");
  var linkArrow = document.getElementById("arrow");

  subMenu.classList.toggle("show");
  linkArrow.classList.toggle("arrow-down");
}

var subMenuItem = document.getElementById("flex-container-link");
subMenuItem.addEventListener("click", toggleSubMenu);




  // Evento de redimensionamiento de ventana
  $(window).resize(function() {
    if (!isResizing) {
      isResizing = true;
      if (!$searchInput.is(':focus')) {
        updateLogoSize();
        moveNavContainer();
        checkWindowSize();
      }
      setTimeout(function() {
        isResizing = false;
      }, 100);
    }
  });
});
