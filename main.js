window.onload = function () {  
    $('#carga').fadeOut();
    $('body').removeClass('gif');
    
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });


  window.onload = moveBackground;

  function moveBackground(){
    var x = 0;
    setInterval(function(){
      x -= 1;
      document.querySelector(".manu").style.backgroundPosition = x + "px 0";
    }, 20);
  }