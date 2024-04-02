const RRSS = [
    { name: 'facebook', url: 'https://www.facebook.com/profile.php?id=61555561957977' },
    { name: 'instagram', url: 'https://www.instagram.com/vdpworld.sas/' },
    { name: 'whatsapp', url: 'https://api.whatsapp.com/send?phone=573216385874' },
]

const ABOUT = {
    APP_NAME: 'VDP World',
    DOMAIN: 'https://vdpworld.com/',
    EMAIL: ['angela.torres@vdpworld.com', 'vicky.daza@vdpworld.com', 'logisticadministrativa@vdpworld.com', 'recepcionfac@vdpworld.com'],
    PHONE: ['3178532719', '3216385974', '3158641071', '6015486314'],
    ADDRESS: 'CALLE 75 # 70D - 21',
    SCHEDULE: '8:00 AM A 5:30 PM L-S / SÁBADO 8:00 AM A 11:00 AM'
}
const MENU = [
    { name: 'Inicio', url: 'index.html' },
    { name: 'Servicios', url: 'services.html' },
    { name: 'Nosotros', url: 'about.html' },
    { name: 'Contacto', url: 'contact.html' },
]
const Header = `
            <header class="main-header main-header-style2">
            <div class="header-upper">
                <div class="container clearfix">
                    <div class="outer-box clearfix">
                        <div class="header-upper-left-style2 max-width float-left clearfix">
                            <div class="header-social-links">
                                <ul class="social-links-style1">
                                    ${
                                        RRSS.map((item) => {
                                            return `<li><a target="_blank" href="${item.url}"><i class="fa fa-${item.name}" aria-hidden="true"></i></a></li>`
                                        }).join('')
                                    }
                                </ul>
                            </div>
                        </div>
                        <div class="header-upper-middle-style2 max-width float-left clearfix">
                            <div class="logo">
                                <a href="index.html"><img src="images/resources/logo.png" style="width:130px;" alt="Awesome Logo"
                                        title="" /></a>
                            </div>
                        </div>
                        <div class="header-upper-right-style2 max-width float-right clearfix">
                            <div class="call-us-now">
                                <div class="icon thm-clr1">
                                    <span class="flaticon-smartphone"></span>
                                </div>
                                <div class="title">
                                    <h6>¡Llamanos ahora!</h6>
                                    <a href="tel:${ABOUT.PHONE[0]}">${ABOUT.PHONE[0]}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-lawer-style2">
                <div class="container clearfix">
                    <div class="outer-box clearfix">
                        <div class="header-lawer-left-style2 float-left">
                            <div class="nav-outer clearfix">
                                <div class="mobile-nav-toggler style2"><span class="icon fa fa-bars"></span></div>
                                <nav class="main-menu style2 navbar-expand-md navbar-light">
                                    <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul class="navigation clearfix">
                                            ${
                                                MENU.map((item) => {
                                                    return `<li><a href="${item.url}">${item.name}</a></li>`
                                                }).join('')
                                            }
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="header-lawer-right-style2 clearfix float-right">
                            <div class="language-switcher">
                                <div id="polyglotLanguageSwitcher">
                                <!--<form action="#">
                                        <select id="polyglot-language-options">
                                            <option id="en" value="en" selected>English</option>
                                            <option id="fr" value="fr">French</option>
                                            <option id="de" value="de">German</option>
                                            <option id="it" value="it">Italian</option>
                                            <option id="es" value="es">Spanish</option>
                                        </select>
                                    </form>-->
                                    <div style="display: flex; height:40px;">
                                    <span style="margin-top:5px">Dolar: </span>
                                    <iframe scrolling="no" style="margin-top: 9px;margin-left: 12px;" width="100" height="20" src="https://dolar.wilkinsonpc.com.co/widgets/gratis/dolar-cop-usd-5.html" frameborder="0"></iframe>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sticky-header">
                <div class="container">
                    <div class="clearfix">
                        <div class="logo float-left">
                            <a href="index.html" class="img-responsive"><img src="images/resources/logo.png" style="width:80px;"  alt=""
                                    title="" /></a>
                        </div>
                        <div class="right-col float-right">
                            <nav class="main-menu clearfix">

                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mobile-menu">
                <div class="menu-backdrop"></div>
                <div class="close-btn"><span class="icon flaticon-multiply"></span></div>

                <nav class="menu-box">
                    <div class="nav-logo"><a href="index.html"><img src="images/resources/logo.png" alt=""
                                title="" /></a></div>
                    <div class="menu-outer"></div>

                    <div class="social-links">
                        <ul class="clearfix">
                            <li><a href="#"><span class="fab fa fa-facebook-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-twitter-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-pinterest-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-google-plus-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-youtube-square"></span></a></li>
                        </ul>
                    </div>
                </nav>
            </div>


            </header>
`

const header = document.getElementById('header')
header.innerHTML = Header

const Footer = `<footer class="footer-area style2">
<div class="footer style2">
    <div class="footer-bg" style="background-image: url(images/pattern/water-wave.png);"></div>
    <div class="container">
        <div class="row">
            <!--Start single footer widget-->
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="100ms">
                <div class="single-footer-widget box1">
                    <div class="title">
                        <h3>About</h3>
                    </div>
                    <div class="our-company-info">
                        <div class="text">
                            <p>En busca de transformar el panorama del comercio internacional. Como miembro
                                comprometido, me impulsa una visión audaz de conectar el mundo y promover la
                                prosperidad global. Estoy dedicado a dejar un legado positivo</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--End single footer widget-->
            <!--Start single footer widget-->
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="100ms">
                <div class="single-footer-widget">
                    <div class="title">
                        <h3>Páginas</h3>
                    </div>
                    <div class="explore-box">
                        <div class="row">
                            <div class="col-xl-6">
                                <ul class="explore-links">
                                    <li><a href="index.html">Inicio</a></li>
                                    <li><a href="services.html">Servicios</a></li>
                                    <li><a href="about.html">Nosotros</a></li>
                                    <li><a href="contact.html">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!--End single footer widget-->
            <!--Start single footer widget-->
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="100ms">
                <div class="single-footer-widget martop50">
                    <div class="footer-contact-info-box">
                        <div class="footer-logo">
                            <a href="index.html"><img src="images/resources/logo.png" style="width: 80px;"
                                    alt="Awesome Logo" title="Logo"></a>
                        </div>
                        <p>CALLE 75 # 70D - 21</p>
                        <a href="mailto:logisticadministrativa@vdpworld.com">logisticadministrativa@vdpworld.com</a><br>
                        <a href="tel:3178532719">317 853 2719</a>
                        <div class="footer-social-links">
                            <ul class="social-links-style1">
                                <li>
                                    <a target="_blank"
                                        href="https://www.facebook.com/profile.php?id=61555561957977"><i
                                            class="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/vdpworld.sas/"><i
                                            class="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a target="_blank"
                                        href="https://api.whatsapp.com/send?phone=573216385874"><i
                                            class="fa fa-whatsapp" aria-hidden="true"></i></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="footer-bottom">
    <div class="container">
        <div class="outer-box">
            <div class="copyright-text">
                <p>©Copyright VDP World Todos los derechos reservados.</p>
            </div>
        </div>
    </div>
</div>
</footer>`
const footer = document.getElementById('footer')
footer.innerHTML = Footer
