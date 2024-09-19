// Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
//   var msnry = new Masonry('.grid');
//   msnry.layout();
//   mostrarTrabajos();
// });

// docReady( function() {
//   window.setTimeout(function() {
//     $("#content").masonry('layout');
//   }, 2000);
// });


//VARIABLES
const contents = document.querySelector('#contents')


//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    mostrarTrabajos(trabajos);
    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
        var msnry = new Masonry('.grid');
        msnry.layout();
    });

})

// window.addEventListener('load', function load() {
//     window.removeEventListener('load', load, false); 
//     setTimeout(function(){
//         reveal();	
//         // revealX();	
//     },3100);           
// },false);

//FUNCTIONS
function mostrarTrabajos(trabajos){

    console.log(trabajos)
    console.log((contents))
    console.log("limpiando")
    contents.innerHTML = ``
console.log("LIMPIO")


    trabajos.forEach( trabajo =>{
        const article = document.createElement('article');
        article.classList.add("col-12", "col-md-4", "container-for-overlay", "reveal", "grid-item");
        
        article.innerHTML = `
          <div class="card">
          <div id="carouselIndicators${trabajos.indexOf(trabajo)}" class="carousel slide" data-bs-ride="false" data-bs-interval="false" >
                  
          <div class="info-wrapper" name="info${trabajos.indexOf(trabajo)}">
            <img src="${trabajo.imgs[trabajo.imgs.length-1]}" class=" w-100" alt="...}" >
            <p>
            ${trabajo.textInfo}
            </p>
          </div>          
                    
          
          <div class="carousel-indicators" id="carousel-indicators-put${trabajos.indexOf(trabajo)}">

          </div>


          <div class="carousel-inner" id="carousel-inner-put${trabajos.indexOf(trabajo)}">
        
          </div>
          
          <button class="carousel-control-prev o-0" type="button" data-bs-target="#carouselIndicators${trabajos.indexOf(trabajo)}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next o-0" type="button" data-bs-target="#carouselIndicators${trabajos.indexOf(trabajo)}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="card-body row">
          <h5 class="col-10">${trabajo.nombre}</h5>
          <span class="col-10">${trabajo.descripcion}</span>
          <i class="bi bi-plus-circle col-2 text-end" name="info${trabajos.indexOf(trabajo)}"></i>
        </div>
        </div>
      `
     
      
      contents.appendChild(article);

      console.log((contents))

      //console.log(article);

        

        trabajo.imgs.forEach(img =>{
          const buttoncarouselIndicator= document.createElement('button');
          buttoncarouselIndicator.setAttribute("type", "button");
          buttoncarouselIndicator.setAttribute("data-bs-target", `#carouselIndicators${trabajos.indexOf(trabajo)}`);
          buttoncarouselIndicator.setAttribute("data-bs-slide-to", `${trabajo.imgs.indexOf(img)}`);
          buttoncarouselIndicator.setAttribute("aria-label", `Slide ${trabajo.imgs.indexOf(img)+1}`);
          
          if (trabajo.imgs.indexOf(img)===0){
            buttoncarouselIndicator.classList.add("active");
            buttoncarouselIndicator.setAttribute("aria-current", "true");
          }
          document.querySelector(`#carousel-indicators-put${trabajos.indexOf(trabajo)}`).appendChild(buttoncarouselIndicator);
        });
        


        trabajo.imgs.forEach(img =>{

          const trabajoImg= document.createElement('div');
          trabajoImg.classList.add("carousel-item");
          if (trabajo.imgs.indexOf(img)===0){
              trabajoImg.classList.add("active");
          }
          trabajoImg.innerHTML = `
          <img src="${img}" class="d-block w-100 img-2" alt="...">
          `
          document.querySelector(`#carousel-inner-put${trabajos.indexOf(trabajo)}`).appendChild(trabajoImg);
          
        })

        const infoImgs= document.getElementById(`carousel-inner-put${trabajos.indexOf(trabajo)}`)
        const infoImg= infoImgs.lastElementChild;
        //  console.log(infoImgs);
        //  console.log(infoImg);
      
      infoImg.innerHTML = `
      <img src="${trabajo.imgs[trabajo.imgs.length-1]}" class="d-block w-100" alt="...">
      <p>${trabajo.textInfo}</p>
      `
      // console.log(infoImg);
      })
      console.log((contents))
      console.log("hasta aca no imprimió un carajo")
      $(".bi-plus-circle").click(mostrar);
      
      
    }
    
    setTimeout(function(){
      reveal();
    },3100)
    
    const articles = document.querySelectorAll('.grid-item')

//-- FIN MOSTRAR TRABAJOS



 
    
    var mainOptionSelect = document.querySelector("#main-option-select");
    const options = document.querySelectorAll(".option-select");


    console.log(mainOptionSelect.innerHTML)
    console.log(options)
    $("#trabajos").addClass("hide");
    
    
    options.forEach(function(option) {
        option.addEventListener("click", function (e) {
            $(options).removeClass("hide");
            setSelectTitle(e);
            console.log((e.target).innerHTML);
            console.log(mainOptionSelect.innerHTML.toLowerCase());
            if((e.target).innerHTML === mainOptionSelect.innerHTML.toLowerCase()){
                console.log("entra2");
                (e.target).classList.add("hide");
                console.log(e.target);
            }
            console.log("aca estoy")
            console.log(mainOptionSelect.innerHTML.toLowerCase())
            if(mainOptionSelect.innerHTML.toLowerCase() === "trabajos"){
                console.log("ENTRÓ")
                console.log("ENTRA SI")
                mostrarTrabajos(trabajos);
                Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
                    var msnry = new Masonry('.grid');
                    msnry.layout();
                });
                $("#contents").removeClass("fit-content");
                reveal();
                console.log(trabajos)
                return;
            }
            filtrarTrabajos();
            reveal();
            console.log("ACA NO LLEGA")
            
            // filtrarTrabajos();
        });
    });
   
    function setSelectTitle(e) {
        // console.log(e);
        const labelElement = document.querySelector(`#${e.target.id}`);
        console.log(labelElement);
        mainOptionSelect.innerText = labelElement.innerText;
        console.log(mainOptionSelect);
        // toggleHidden(e);
    };
    
    // function toggleHidden() {
    //     labelElement.classList.toggle("hidden");
    // }

    function filtrarTrabajos(){
        console.log("filtrando...")
        const filtrado= trabajos.filter(filtrarCategoria);
        mostrarTrabajos(filtrado);
            // && articulo.innerHeight < 468
            isDocumentBigger(filtrado);
          }
          function isDocumentBigger(filtrado){
            // if(document.documentElement.scrollHeight >= window.innerHeight){
              if(filtrado.length<=3){
              $("#contents").addClass("fit-content");
              // $(".footer").addClass("position-absolute");
              return;
            }
            else{
              $("#contents").removeClass("fit-content");
              // $(".footer").removeClass("position-absolute");
            }
          }
    function filtrarCategoria(trabajo){
            return trabajo.categoria === mainOptionSelect.innerHTML.toLowerCase();
    }

    $(".bi-plus-circle").click(mostrar);

    
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

    // PROBAR LA FUNCION DE FILTER