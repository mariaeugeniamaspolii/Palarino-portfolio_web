jQuery(window).load(function() {
 
    /*
        Stop carousel
    */
    $('.carousel').carousel('pause');
 
    function showInfo() {
        var x = document.getElementById("info1");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

      function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }


    $(this).click(mostrar);
    
    function mostrar(){
            $(this).css("color","black");
    }

      $('.carousel').bind('slide.bs.carousel', function (e) {
        var index = $(e.relatedTarget).index();
    
        $('[data-target="#' + $(this).prop('id') + '"]').each(function (i) {
            if (i === index) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});