    window.addEventListener('load', function load() {
        //console.log('ACA ESTA');
        //console.log(onload);
        window.removeEventListener('load', load, false); 
        setTimeout(function(){
            $('#onload').fadeOut();
            document.body.classList.remove('hidden');
        },2500);
        setTimeout(function(){
            $('#onload').removeClass('d-flex');
            $('#onload').addClass('d-none');
        },2900);
        setTimeout(function(){
            // reveal();	
            window.addEventListener('scroll', reveal);
            $('.nav-item').removeClass('d-none');
            $('.nav-item').addClass('slide-right');
            $('.navbar-brand').removeClass('d-none');
            $('.navbar-brand').addClass('slide-right');
            // revealX();	
        },3100);           
    },false);
    
    function reveal(){
        var reveals = document.querySelectorAll('.reveal');
        $('.revealX').addClass('active');
      
      for(var i = 0; i < reveals.length; i++){
          
          var windowheight = (window.innerHeight);
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = -100;
          //console.log(windowheight);
          //console.log(revealtop);
          //console.log(top);
        
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
        //console.log(i);
        //console.log(revealtop);
    }
  }

