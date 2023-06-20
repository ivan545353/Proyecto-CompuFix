$(document).ready(function() {
  var $searchInput = $('.search-container-input');
  var isResizing = false;

  // Función para cambiar la posición de la barra de búsqueda en el DOM
  function moveNavContainer() {
    var windowWidth = $(window).width();
    var $searchContainer = $(".search-container"); // Contenedor de la barra de búsqueda
    var $flexContainer = $(".flex-container-searchbar"); // Contenedor donde debe ir la barra de búsqueda
    var $originalContainer = $(".search-container-returnjs"); // Contenedor original de la barra de búsqueda
    var $flexcontainer2 = $(".flex-container"); //contenedor de la barra de navegación
    var $originalflexcontainer = $(".header-2"); //contenedor original de la barra de navegación
    var $destinoflexcontainer = $(".header-nav"); //contenedor donde debe ir la barra de navegación
    if (windowWidth < 768) {
      $searchContainer.detach().appendTo($flexContainer);
      $flexcontainer2.detach().appendTo($destinoflexcontainer);
    } else {
      $searchContainer.detach().appendTo($originalContainer);
      $flexcontainer2.detach().appendTo($originalflexcontainer);
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

  // Variables para el logo SVG
  var $logoSVG = $('.logo');
  var originalWidth = $logoSVG.attr('width');
  var originalViewBox = $logoSVG.attr('viewBox');

  // Media query a monitorear
  var mediaQuery = window.matchMedia("(max-width: 768px)");

  // Funcion a ejecutar en caso de que la media query sea true
  function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
      moveNavContainer();
      updateLogoSize();
    } else {

    }
  }

  // Ejecuta la función inicialmente para verificar el estado actual de la media query
  handleMediaQueryChange(mediaQuery);


  // Añade un listener al evento de cambio en la media query
  mediaQuery.addEventListener('change', handleMediaQueryChange);

  //funcion para mostrar los items de la barra de navegacion cuando cambie el tamaño de pantalla
  function checkWindowSize() {
    if (window.innerWidth > 767) {
      menu.style.display = 'flex';
    }
  }


  //Menu de hamburguesa
  var checkbox = document.getElementById('checkbox');
  var menu = document.getElementById('flex-container');


  checkbox.addEventListener('click', function() {
    if (checkbox.checked) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  })

  checkWindowSize();

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
