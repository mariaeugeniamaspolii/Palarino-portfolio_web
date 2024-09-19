
$(document).ready(inicio);

const fullOverlay = document.querySelector('.full-overlay');
//console.log(fullOverlay)
$(".full-overlay").removeClass("d-block");

//$(".full-overlay").addClass("d-none");

function inicio(){
    // $(".bi-plus-circle").click(mostrar);
    $(this).click(showOverlay);
    $(this).hover(showOverlay);
    //$(".full-overlay").click(showOverlay);
}

function mostrar(){
    $(".info-wrapper").css("display", "none");
    $(".bi-plus-circle").css("opacity","0.5");
    //$('.info-wrapper').removeClass("d-block"); 
        var pepe= $(this);
        //$(this).next().css("display","block");
        //console.log(pepe)
        //$(this).closest(".info-wrapper").toggleClass("d-block"); 
        //$(".bi-plus-circle:not(this)").closest('.card').find('.info-wrapper').toggleClass("d-none"); 
        
        $(this).closest('.card').find('.info-wrapper').toggleClass("visible"); 
        $(".info-wrapper").not($(this).closest('.card').find('.info-wrapper')).removeClass("visible");
        $(this).closest('.card').find('.info-wrapper').toggleClass("closing"); 
        
        $(this).toggleClass("o-100"); 
        $(".bi-plus-circle").not($(this)).removeClass("o-100"); 
        $(this).toggleClass("i-rotated"); 
        $(".bi-plus-circle").not($(this)).removeClass("i-rotated"); 

        
        
        
}

function showOverlay(e){

    
    
    //e.preventDefault();
    //console.log(e.target)
    //$(".full-overlay").removeClass("d-none");
    
    if(e.target.classList.contains('clickable-dropdown')||e.target.classList.contains('dropdown-chevron')){
        $(".full-overlay").toggleClass("d-block");
        $(".dropdown-chevron").toggleClass("active");
        $(".dropdown-chevronn").toggleClass("dropdown-chevronn-rotated");
        //console.log("entra1")
        //console.log(fullOverlay)
    };
    
    if(!e.target.classList.contains('clickable-dropdown')&&!e.target.classList.contains('dropdown-chevron')){
        $(".full-overlay").removeClass("d-block");
        $(".dropdown-chevron").removeClass("active");
        $(".dropdown-chevronn").removeClass("dropdown-chevronn-rotated");
        //console.log("entra2")
        //console.log(fullOverlay)
        //console.log(fullOverlay);

    }
}
