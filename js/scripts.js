$(document).ready(function() {
    // Función para cambiar la posición de la barra de búsqueda en el DOM
    function moveSearchContainer() {
      var windowWidth = $(window).width();
      var $searchContainer = $(".search-container"); // Contenedor de la barra de búsqueda
      var $flexContainer = $(".flex-container-searchbar"); // Contenedor donde debe ir la barra de búsqueda
      var $pruebaContainer = $(".search-container-returnjs"); // Contenedor original de la barra de búsqueda
  
      if (windowWidth < 768) {
        $searchContainer.detach().appendTo($flexContainer);
      } else {
        $searchContainer.detach().appendTo($pruebaContainer);
      }
    }
  
    // Variables para el logo SVG
    var $logoSVG = $('.logo');
    var originalWidth = $logoSVG.attr('width');
    var originalViewBox = $logoSVG.attr('viewBox');
  
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
  
    // Evento de redimensionamiento de ventana
    $(window).resize(function() {
      moveSearchContainer();
      updateLogoSize();
    });
  });
  