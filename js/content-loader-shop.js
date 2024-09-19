
//VARIABLES
const shopContent = document.querySelector('#shop')
const modalsContent = document.querySelector('#modals')


//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
  mostrarShop();
})


//FUNCTIONS
function mostrarShop(){

    shop.forEach( producto =>{
        const article = document.createElement('article');
        article.classList.add("col-12", "col-md-4",  "container-for-overlay", "reveal");
        article.setAttribute("data-bs-toggle", `modal`);
        article.setAttribute("data-bs-target", `#obra-${shop.indexOf(producto)}-modal`);
        
        article.innerHTML = `

        <div class="card">
        <div class="img-hover-zoom mb-2">
            <img src="${producto.img}" class="d-block w-100 img-2" alt="imagen ${producto.nombre}">
        </div>
        <div class="card-body row">
            <h5 class="col-8 text-capitalize">${producto.nombre}</h5>
            <span class="col-4 text-end">$${producto.precio}</span>
            <span class="col-8 ">${producto.medidas}</span>
            <div class="col-4 text-end">
                <button class="btn btn-secondary mt-2">buy</button>
            </div>
        </div>
    </div>
`
     
      shopContent.appendChild(article);
      console.log(article);    
      


      
        const modal = document.createElement('div');
        modal.classList.add("modal", "fade");
        modal.setAttribute("id", `obra-${shop.indexOf(producto)}-modal`);
        modal.setAttribute("aria-labelledby", `${producto.nombre}-modalLabel`);
        modal.setAttribute("aria-hidden", `true`);        
        modal.setAttribute("tabindex", `-1`);        
        modal.innerHTML = `

        <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header  p-4 pb-0 pb-md-3 px-lg-5 p-4 px-lg-5">

            <button type="button" class="btn-close mb-4 mb-md-0" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i></button>
            </div>
            <div class="modal-body p-6 pt-0 px-lg-5">
                <div class=" container-lg">
                    <div class="row justify-content-between">
                        <div class="col-12 col-lg-5 px-0 px-lg-4">
                            <!--foto-->
                            <div id="content-wrapper">
                                <img class="featured" id="obra-${shop.indexOf(producto)}" src="${producto.img}">
                            </div>
                            <!--/foto-->
                        </div>

                        <div class="col-12 col-lg-6 px-0 px-md-3">
                            <h2 class="text-start mt-4 mt-lg-0 mb-0 text-capitalize">${producto.nombre}</h2>
                            <p class="my-0 mt-md-2 special-text-1">$${producto.precio}</p>
                            <p class="special-text-1 text-uppercase"><span>${producto.medidas}</span></p>
                            <p class="my-0 mt-md-4">${producto.descripcion}</p>

                            <!-- <p class="m-0 mt-4"><span>¡Elige cualquiera de nuestros diseños de pinball!</span></p> -->
                            <p class="special-text-1 m-1 mt-4 mb-3"><span>(El pago web se realiza por mercado pago)</span></p>
                            <a href="${producto.link}"><button class="btn btn-comprar btn-primary px-1 px-md-3 shadow" >comprar</button></a> 
                            <div class="row align-items-baseline mt-2">
                                <p class="col-12 col-md-9 m-0"><span>Tienes más dudas? </span><a href="contact.html" alt="" class="ms-1">Contáctame  :)</a></p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
`
     
      modalsContent.appendChild(modal);
      console.log(modal);       
    })

}

// <!--Modal-->
// <div id="modals">
    
// </div>

{/* <article class="col-12 col-md-4  container-for-overlay reveal" data-bs-toggle="modal" data-bs-target="#obra-1-modal">
<div class="modal fade" id="obra-1-modal" tabindex="-1" aria-labelledby="pinball-3pantallas-modalLabel" aria-hidden="true"> */}
