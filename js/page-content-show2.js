
    document.addEventListener('DOMContentLoaded', function() {
        
        reveal()	
        revealX()	
        $('.nav-item').addClass('slide-right');
        $('.navbar-brand').addClass('slide-right');
        window.addEventListener('scroll', reveal);

    })

  function reveal(){
      var reveals = document.querySelectorAll('.reveal');
      
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

  function revealX(){
      var reveals = document.querySelectorAll('.revealX');
      
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