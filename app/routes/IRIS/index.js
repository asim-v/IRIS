import { html, Component } from '../../../deps/react.js';
import { Link } from '../../../deps/react-router-dom.js';
import resolveAsset from '../../utils/resolveAsset.js';




let Index = () => html
`

<html>
    <head>
        <meta charset="UTF-8" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>


        <title>IRIS tech.io</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
        <link rel="stylesheet" href="/app/routes/IRIS/css/preloader.css" />

        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />
        


        
        <link href="/app/routes/IRIS/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

        
        <link href="/app/routes/IRIS/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/app/routes/IRIS/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/app/routes/IRIS/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="/app/routes/IRIS/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/app/routes/IRIS/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="/app/routes/IRIS/css/aos.css" rel="stylesheet" />
        <link rel="stylesheet" href="/app/routes/IRIS/css/fonts.css" />
        <link rel="stylesheet" href="/app/routes/IRIS/css/navstyle.css" />
        <link rel="stylesheet" href="/app/routes/IRIS/css/styles-all.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        <script type="text/javascript" src="/app/routes/IRIS/js/aos.js"></script>

        
        <link href="/app/routes/IRIS/css/style.css" rel="stylesheet" />
        
    </head>
        
        <div id="loader-wrapper">
            <div id="loader"></div>

            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
        </div>

        <div id="content">

            <body id="page-top">
        
                <nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                    <div class="container">
                        <a class="navbar-brand js-scroll" href="index.html">
                            <e class="a centerr el-sm"><img src="/app/routes/IRIS/img/svg.svg" height="40px" /> IRIS Tech</e>
                        </a>
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Desarrollo
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="balam.html">Balam</a>
                                        <a class="dropdown-item" href="hydro.html">Hydro</a>
                                        <a class="dropdown-item" href="fireflies/index.html">Fireflies</a>
                                        <a class="dropdown-item" href="fireflies/index.html">Navek</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Servicios
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="autom.html">Automatización de procesos</a>
                                        <a class="dropdown-item" href="design.html#">Diseño 3D</a>
                                        <a class="dropdown-item" href="webdev.html#">Desarrollo Web</a>
                                        <a class="dropdown-item" href="simul.html#">Simulación de sistemas</a>
                                        <a class="dropdown-item" href="maint.html#">
                                            Diseño y mantenimiento <br />
                                            de maquinas
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <style type="text/css">nav ul li  a:hover{background:none;}</style>
                                    <a class="button js-scroll " href="/blog" role="button" style="border-radius: 30px;padding: 5px 15px">Desarrollo</a>
                                </li>
          
                            </ul>
                        </div>
                    </div>
                </nav>
          

          
                <div id="home" class="intro bg-image img-fluid" style="text-shadow: 1px 1px 2px black;">
                    <div class="intro-content display-table">
                        <div class="table-cell">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-7 col-lg-pull-7">
                                        <div class="centerr">
                                            <p class="intro-subtitle col-sm-7"></p>
                                            <p class="intro-subtitle">
                                                Expandiendo los limites de la
                                                <b style="text-shadow: 0px 0px 3px white;">
                                                    <span class="text-slider-items">Robótica,Inteligencia Artificial,Automatización</span>
                                                    <strong class="text-slider"></strong>
                                                </b>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-5 centerr el-sm col-md-push-5">
                                        <img src="/app/routes/IRIS/img/white.png" class="main-logo" />
                                    </div>
                                    <svg width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none" class="separator">
                                        <path d="M0 0 L50 90 L100 0 V100 H0" fill="#fff" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <link rel="stylesheet" href="/app/routes/IRIS/css/wtchstyle.css" />

                <script src="https://jeromeetienne.github.io/threex.terrain/examples/vendor/three.js/build/three-min.js"></script>
                <script src="https://jeromeetienne.github.io/threex.terrain/examples/vendor/three.js/examples/js/SimplexNoise.js"></script>
                <script src="https://jeromeetienne.github.io/threex.terrain/threex.terrain.js"></script>

                <script src="/app/routes/IRIS/js/partscript.js"></script>



                <section class="sect-pt4" style="background-color: #ffff;">
                    <section class="mb-3">
                        <div class="container-lg">
                            <div class="row">
                                <div class="col-12 col-lg-8 offset-0 offset-lg-2 pt-2">
                                    <div class="xlarge pr-xl-0.25 js-widow" style="margin-left: -0.1rem;">

                                        <p>
                                            IRIS tech.io es una empresa de investigación basada en México, CDMX. Nuestra misión es llevar al público la tecnología más avanzada y facilitar la integración de la ciencia en nuestras vidas
                                            diarias.
                                        </p>
                                        
                                    </div>
                                    <a class="btn icon-next right no-fade color-fg-50 mt-1" href="about.html">Leer más</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="container-lg">
                        <section class="mb-3">
                            <h6 class="small-copy mb-0.75">Blog Posts Recientes</h6>

                            <hr />
                            <a href="openai-pytorch.html" class="post-card d-block pt-2/3 pb-7/12">
                                <div class="row">
                                    <div class="col-12 col-md-3 col-lg-2 order-1 order-md-0">
                                        <time class="post-card-fade xsmall-caps d-block color-fg-40 mt-0.125" datetime="2020-01-30">Enero 30, 2020</time>
                                    </div>
                                    <div class="col-12 col-md-9 col-lg-10 order-0 order-md-1">
                                        <h6 class="post-card-fade small-copy balance-text">Fabricación automática de cubrebocas</h6>
                                    </div>
                                </div>
                            </a>

                            <hr />
                            <a href="openai-pytorch.html" class="post-card d-block pt-2/3 pb-7/12">
                                <div class="row">
                                    <div class="col-12 col-md-3 col-lg-2 order-1 order-md-0">
                                        <time class="post-card-fade xsmall-caps d-block color-fg-40 mt-0.125" datetime="2020-01-30">Abris 12, 2020</time>
                                    </div>
                                    <div class="col-12 col-md-9 col-lg-10 order-0 order-md-1">
                                        <h6 class="post-card-fade small-copy balance-text">Interfaz de visión por computadora para sistemas de N grados de libertad</h6>
                                    </div>
                                </div>
                            </a>

                            <hr />
                            <a href="openai-pytorch.html" class="post-card d-block pt-2/3 pb-7/12">
                                <div class="row">
                                    <div class="col-12 col-md-3 col-lg-2 order-1 order-md-0">
                                        <time class="post-card-fade xsmall-caps d-block color-fg-40 mt-0.125" datetime="2020-01-30">Diciembre 12, 2019</time>
                                    </div>
                                    <div class="col-12 col-md-9 col-lg-10 order-0 order-md-1">
                                        <h6 class="post-card-fade small-copy balance-text">Detección de sargazo con redes neuronales recurrentes</h6>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a href="openai-pytorch.html" class="post-card d-block pt-2/3 pb-7/12">
                                <div class="row">
                                    <div class="col-12 col-md-3 col-lg-2 order-1 order-md-0">
                                        <time class="post-card-fade xsmall-caps d-block color-fg-40 mt-0.125" datetime="2020-01-30">Septiembre 12, 2019</time>
                                    </div>
                                    <div class="col-12 col-md-9 col-lg-10 order-0 order-md-1">
                                        <h6 class="post-card-fade small-copy balance-text">Cortadora de poliestireno industrial</h6>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a class="btn icon-next right no-fade color-fg-50 mt-1" href="blog.html">Ver Blog</a>
                        </section>
                        <hr class="mb-1" />
                    </div>

                    <div class="container-fluid relative pt-2" style="background-color: white;">
                        <div class="row" lazy="loaded">
                            <div class="container">
                                <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-lg-6 col-xs-6 col-xs-push-6">
                                            <img src="/app/routes/IRIS/img/balamo.png" width="100%" />
                                        </div>
                                        <div class="col-lg-6 col-xs-1" align="right">
                                            <div class="row h-25">
                                                <div class="col-lg"></div>
                                                <div class="col-lg">
                                                    <div class="row">
                                                        <div class="title-box text">
                                                            <h3 class="title-a">
                                                                Balam
                                                                <div class="line-mm" style="width: 50%; padding: ;"></div>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div data-aos="fade-up" data-aos-delay="10">
                                                    <div class="subtitle-c">
                                                        Balam es el plato <b>ovalado</b> para bicicleta que <b>optimiza</b> el pedaleo y reduce el <b>punto muerto.</b><br />
                                                        <br />
                                                        <b><e class="counter" style="color: #7c6bff;">10</e></b>% Más eficiente <br />
                                                        <b><e class="counter" style="color: #7c6bff;">8</e></b>% Más rendimiento <br />
                                                        <b><e class="counter" style="color: #7c6bff;">7</e></b>% Menos fatiga
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row h-25 float-right align-items-center">
                                                <a class="button button-big js-scroll purple" href="balam.html" role="button">Personaliza el tuyo!</a>
                                                <div id="hydro"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <script>
                    AOS.init();
                </script>
                <section class="about-mf route">
                    <div class="container-fluid relative">
                        <div class="row" style="background-image: url('/app/routes/IRIS/img/wire.jpeg');">
                            <div class="container">
                                <div class="col-sm-12">
                                    <div class="row" style="margin-top: 5%; margin-bottom: 10%;">
                                        <div class="col-lg-6">
                                            <div class="row">
                                                <div class="title-box text">
                                                    <p class="subtitle-a">Introduciendo</p>
                                                    <h3 class="title-a">Hydro</h3>
                                                    <div class="line-mf" style="width: 50%;"></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div data-aos="fade-up" data-aos-delay="150">
                                                    <div class="subtitle-b">
                                                        Hydro redefine el concepto de bicicleta con su transmisión <b>hidráulica</b> y sistema <b>inteligente</b>, ofrece una perspectiva fresca en el ciclismo de alto rendimiento.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row h-25 justify-content-left align-items-center">
                                                <a class="button button-big js-scroll dark" href="hydro.html" role="button">Leer más</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="150">
                                            <div class="col-lg offset-md-1">
                                                <img src="/app/routes/IRIS/img/img1.png" class="bike" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="about-mf route" id="fireflies">
                    <div class="container-fluid relative" style="background-color: #f7f7f7;">
                        <div class="col-sm-12">
                            <div class="row" lazy="loaded">
                                <div class="container">
                                    <div class="row" style="margin-top: 10%;">
                                        <div class="col-lg-6 center-block text-center">
                                            <div class="row-sm-1 h-50"><img src="/app/routes/IRIS/img/helmet.png" data-aos="fade-down" data-aos-delay="150" width="70%" /></div>
                                            <div class="row-sm-1 h-50">
                                                <e class="col-sm-1"><img src="/app/routes/IRIS/img/glove.png" data-aos="fade-right" class="smaller" width="30%" /></e>
                                                <e class="col-sm-1"><img src="/app/routes/IRIS/img/firefly1.png" data-aos="fade-left" class="smaller" width="50%" /></e>
                                                <section id="navek"></section>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="row">
                                                <div class="col-lg"></div>
                                                <div class="col-lg title-box text">
                                                    <h3 class="title-a">Fireflies</h3>
                                                    <div class="line-ff" style="width: 50%;"></div>
                                                </div>
                                                <div class="col-lg"></div>
                                            </div>
                                            <div class="row">
                                                <div data-aos="fade-up" data-aos-delay="150">
                                                    <div class="subtitle-b text-center">
                                                        Hay mas de <b><e class="counter" style="color: #e37134;">57,452</e></b>
                                                        ciclistas diarios con
                                                        <b><e class="counter" style="color: #e37134;">20,125,267</e></b>
                                                        calorias quemadas diariamente en la CDMX. Fireflies
                                                        <a style="font-weight: bold;" href="https://en.wikipedia.org/wiki/Internet_of_things"> IOT</a>
                                                        propone la mas avanzada tecnología para la <b>colaboración</b>, <b>seguimiento</b> y <b>mejora</b> de tus rutinas ciclistas.
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row h-25 justify-content-center align-items-center">
                                                <a class="button button-big js-scroll dark" href="fireflies/index.html" role="button">Leer más</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row" class="navmap" style="background-image: url('/app/routes/IRIS/img/illustration-map.png');">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg"><img src="/app/routes/IRIS/img/navigation3.png" width="70%" class="img-fluid phone" alt="Responsive image" data-aos="fade-right" draggable="false" /></div>
                                        <div class="col-lg-6">
                                            <div class="row">
                                                <div class="col-lg"></div>
                                                <div class="col-lg title-box text">
                                                    <h3 class="title-a">Navek</h3>
                                                    <div class="line-ff" style="width: 50%;"></div>
                                                </div>
                                                <div class="col-lg"></div>
                                            </div>
                                            <div class="row" style="padding-bottom: 3%;">
                                                <div data-aos="fade-up" data-aos-delay="150">
                                                    <div class="subtitle-b text-center">
                                                        Navek funciona en conjunto con <e class="orange"><b>Fireflies</b></e> para llevarte donde necesites.<br />
                                                        ¿Necesitas ir más <e class="orange">rápido?</e><br />
                                                        ¿Necesitas llegar <e class="orange"> mejor?</e><br />
                                                        ¿Necesitas estar más <e class="orange">seguro?</e><br />
                                                        <br />
                                                        <div class="subtitle-a center centerr" style="font-weight: bolder; font-size: 50px;">En desarrollo</div>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row h-25 justify-content-center align-items-center">
                                                <div class="col-lg"></div>
                                                <div class="col-lg"></div>
                                                <div class="col-lg"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>

            <footer>
                <section class="paralax-mf footer-paralax bg-image route" style="background-color: #0f0f0f;">
                    <div class="overlay-mf"></div>
                    <footer>
                        <div class="container" style="font-family: 'montserrat';">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="copyright-box">
                                        <p class="copyright">Copyright <strong>IRISTECH</strong>. @2020</p>
                                        <a style="font-weight: lighter; color: white;" href="mailto:support@iristech.io?Subject=Support%20" target="_top">support@iristech.io</a><br />
                                        <a style="font-weight: lighter; color: white;" href="mailto:contact@iristech.io?Subject=Support%20" target="_top">contact@iristech.io</a><br />
                                        <u href="about.html">
                                            <a style="font-weight: bold; color: white;" href="about.html"> Acerca de</a>
                                        </u>
                                        <br />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="socials">
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/IRISTechMX/">
                                                    <span class="ico-circle"><i class="ion-social-facebook"></i></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/iristechmx/?hl=es">
                                                    <span class="ico-circle"><i class="ion-social-instagram"></i></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span class="ico-circle"><i class="ion-social-codepen"></i></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <span class="ico-circle"><i class="ion-social-github"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"/>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                <a href="https://api.whatsapp.com/send?phone=5531359964&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20IRIS%202." class="float" target="_blank" style="background-color: background: rgb(255,21,126);
background: linear-gradient(90deg, rgba(255,21,126,1) 0%, rgba(255,21,21,1) 100%);">
                    <i class="fa fa-whatsapp my-float"></i>
                </a>

                


                <script src="/app/routes/IRIS/lib/jquery/jquery.min.js"></script>
                <script src="/app/routes/IRIS/lib/jquery/jquery-migrate.min.js"></script>
                <script src="/app/routes/IRIS/lib/popper/popper.min.js"></script>
                <script src="/app/routes/IRIS/lib/bootstrap/js/bootstrap.min.js"></script>
                <script src="/app/routes/IRIS/lib/easing/easing.min.js"></script>
                <script src="/app/routes/IRIS/lib/counterup/jquery.waypoints.min.js"></script>
                <script src="/app/routes/IRIS/lib/counterup/jquery.counterup.js"></script>
                <script src="/app/routes/IRIS/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="/app/routes/IRIS/lib/lightbox/js/lightbox.min.js"></script>
                <script src="/app/routes/IRIS/lib/typed/typed.min.js"></script>
                
                <script src="/app/routes/IRIS/contactform/contactform.js"></script>

                
                <script src="/app/routes/IRIS/js/main.js"></script>
                <script src="https://unpkg.com/aos@3.0.0-beta.6/dist/aos.js"></script>
                <script>
                    AOS.init();
                </script>

                
                <script src="https://codepen.io/_fbrz/pen/9a3e4ee2ef6dfd479ad33a2c85146fc1.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                <script src="/app/routes/IRIS/js/preloader.js"></script>
            </footer>
        </div>
</html>
`

export default Index;