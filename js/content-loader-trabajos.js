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
  mostrarTrabajos();
})


//FUNCTIONS
function mostrarTrabajos(){

  limpiarHTML();

    trabajos.forEach( trabajo =>{
        const article = document.createElement('article');
        article.classList.add("col-12", "col-md-4", "container-for-overlay", "reveal");
        
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

}

//-- FIN MOSTRAR TRABAJOS


//limpiar HTML
function limpiarHTML(){
  while(contents.firstChild){
    contents.removeChild(contents.firstChild);
  }
}