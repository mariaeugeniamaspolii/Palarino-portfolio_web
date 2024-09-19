<?php

$mensajeEnviado = false;

if(isset($_GET['email']) && $_GET['email'] != ''){

    if( filter_var($_GET['email'], FILTER_VALIDATE_EMAIL)){
        
        $nombre=$_GET['nombre'];
        $mail=$_GET['email'];
        $asunto=$_GET['asunto'];
        $textoMensaje=$_GET['mensaje'];
        
        
        $destinatario="maria.maspoli@outlook.es";

        $mensaje = '
            <html>
            <head>
            <title>Mail enviado desde WEB</title>
            </head>
            <body style="background-color:black; color:white;"">
            <h1>mensaje enviado por:' .$nombre.'</h1>
                <p>'.$textoMensaje.'</p>
            </body> 
            </html>
            ';
         
        // Cabecera que especifica que es un HMTL
        $cabeceras  = "MIME-Version: 1.0" . "\r\n";
        $cabeceras .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
         
        // Cabeceras adicionales
        $cabeceras .= "From: $mail". "\r\n";
        
        $enviado=mail($destinatario, $asunto, $mensaje, $cabeceras);

        $mensajeEnviado = true;
    }
    else{
        $error_mail= "error-mail";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/styles.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;700;900&display=swap" rel="stylesheet">

    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="js/myjs.js"></script>
    <script src="js/paja.js"></script>

    <script src="js/bootstrap.bundle.min.js" defer></script>
    <link rel="stylesheet" href="node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async></script>
    <link rel="icon" href="assets/img/v logo celeste.svg">    <title>Document</title>
</head>
    <body class="body-contact bg-cover">
        <!--Header-->
        <header class="header ">
        <nav class="navbar navbar-expand-lg py-3 navbar-dark fixed-top bg-secondary">
        <div class="container p-md-0 justify-content-between">
            <a class="navbar-brand " href="index.html">
                JUANPALA
            </a>
            <ul class="navbar-nav mb-2 mb-lg-0 justify-content-end col-md-3">
                <li class="nav-item">
                <a class="nav-link" href="shop.html">shop</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="contact.html">contacto</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link" href="#"> en/es</a>
                </li>
            </ul>
        </div>
        </nav>

        
    </header>
    <!--/Header-->

    <div class="content">
    <?php
    if($mensajeEnviado):      
    ?>

 
<div class="container container-contact">
        <div class="row justify-content-around">
            <div class="col-12 col-md-5">
                <div class="row justify-content-end">
                    <p class="special-text-1 col-7">diseño gráfico  <br> e illustración</p>
                        <a href="https://www.instagram.com/palalalarino/" class="col-4 text-end fs-5">@palarino</a>
                        <div class="col-10 mt-5">
                            <h5 class="mb-3">Hola, soy Juan Palarino <br>-diseñador gráfico e illustrador- <br> <span> Montevideo, Uruguay</span></h5>    
                            <p>Trabajo en proyectos de identidad, tapas de libros, vinilos e ilustración comercial. Mi trabajo se caracteriza por la mezcla de técnicas  con digital, buscando transmitir la  narrativa de los proyecto con un estilo orgánico.</p>
                            <img src="img/4OJGNb.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mt-5 mt-md-0">
                    <div class="row">
                        
                            <div class="col-10 mt-7">
                                <h3 class="">Gracias por contactarte!</h3>
                                <p>Te responderé cuanto antes</p>
                                <p>Mientras tanto te invito a recorrer mis trabajos</p>
                                <button class="full-btn btn btn-primary btn-large">Ver trabajos</button>
                            </div>
                    </div>

            </div>
        </div>
    </div>
    


    <?php
    else:      
    ?>  
    
    
    <div class="container container-contact">
        <div class="row justify-content-around">
            <div class="col-12 col-md-5">
                <div class="row justify-content-end">
                    <p class="special-text-1 col-7">diseño gráfico  <br> e illustración</p>
                        <a href="https://www.instagram.com/palalalarino/" class="col-4 text-end fs-5">@palarino</a>
                        <div class="col-10 mt-5">
                            <h5 class="mb-3">Hola, soy Juan Palarino <br>-diseñador gráfico e illustrador- <br> <span> Montevideo, Uruguay</span></h5>    
                            <p>Trabajo en proyectos de identidad, tapas de libros, vinilos e ilustración comercial. Mi trabajo se caracteriza por la mezcla de técnicas  con digital, buscando transmitir la  narrativa de los proyecto con un estilo orgánico.</p>
                            <img src="img/4OJGNb.png" alt="">
                        </div>
                    </div>
                </div>
            <div class="col-12 col-md-4 mt-5 mt-md-0">
                <form class="justify-content-between" action="procesarMail.php" enctype="text/plain" method="get" id="contact">
                    <h5>Contáctanos!</h5>
                   
                    <!--Nombre-->
                    <label for="nombre" class="col-form-label">Nombre (*)</label>
                    <input type="text" class="form-control" name="nombre" id="nombre" class="form-control" placeholder="Nombre" required>
                    <!--email-->
                    <label for="email" class="col-3 col-form-label">E-mail (*)</label> 
                    <span class="col-8 hide-mail <?= $error_mail ?? ""?>"><p class="">Debes ingresar tu mail!</p></span>
                    <input type="text" class="form-control" name="email" id="email" class="form-control" placeholder="E-mail" required>
                    <!--asunto-->
                    <label for="asunto" class=" col-form-label">Asunto</label>
                    <input type="text" class="form-control" name="asunto" id="asunto" class="form-control" placeholder="Asunto">
                    <!--mensaje-->
                    <label for="mensaje" class="col-form-label">Dejanos tu mensaje! (*)</label>
                    <textarea type="" class="form-control" name="mensaje" id="mensaje" class="form-control" placeholder="Dejanos tu mensaje!" required></textarea>

                    <button type="submit" class="btn btn-primary btn-large">Ponte en contacto!</button>
                </form>
            </div>
        </div>
    </div>

    <?php
    endif;      
    ?>  

        
      <!--Footer-->
      <div class="footer footer-short-page ">
        <script> 
        $(function(){ $(".footer").load("footer.html") });
      </script>
      </div>
      <!--/Footer-->
    </div>
</body>
</html>
