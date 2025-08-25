let menuOpen = false;
let heroIdx = 0;
let isSwitching = false;
let heroImgInt;

function createHtml(){
    let menu = document.createElement("div");
    menu.classList.add("menu-container");
    menu.innerHTML = `
        <a href="index.html"><div class="menu-section menu-dark">Home</div></a>
        <a href="about.html"><div class="menu-section">About us</div></a>
        <a href="services.html"><div class="menu-section menu-dark">Our Solutions</div></a>
        <a href="index.html"><div class="menu-section">Contact us</div></a>  
    `

    let header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = `
        <div class="header-flex width">
            <img onclick="window.location.href='index.html'" src="images/logo.jpg" class="header-logo" />
            <div class="header-nav">
                <a href="index.html" class="header-link">Home</a>
                <a href="about.html" class="header-link">About us</a>
                <a href="services.html" class="header-link">Our Solutions</a>
                <a href="contact.html" class="header-link">Contact</a>
            </div>
            <a href="contact.html" class="btn-header">Get in Touch</a>

            <div class="header-burger" onclick="toggleMenu()">
                <div class="burger-line line1"></div>
                <div class="burger-line line2"></div>
                <div class="burger-line line3"></div>
            </div>
        </div>
    `

    let footer = document.createElement("div");
    footer.classList.add("foot-container");
    footer.innerHTML = `
        <div class="foot-wrapper">
            <div class="foot-flex">
                <div class="foot-content">
                    <div class="foot-logo-container">
                        <img src="images/logo.jpg" class="foot-logo" />
                        <div class="foot-name">CAD Golf</div>
                    </div>
                    <div class="foot-para">Refrigeration Solutions delivers efficient cooling systems built to last. Trusted experts, modern tech, and seamless service.</div>
                    <a href="contact.html" class="btn-foot">Get in Touch <img src="images/arrow.png" class="home-arrow" /></a>
                </div>
                <div class="foot-nav">
                    <div class="foot-ul">
                        <div class="foot-label">Navigation</div>
                        <a href="index.html" class="foot-link">Home</a>
                        <a href="about.html" class="foot-link">About us</a>
                        <a href="services.html" class="foot-link">Our Solutions</a>
                        <a href="contact.html" class="foot-link">Contact us</a>
                    </div>
                    <div class="foot-ul">
                        <div class="foot-label">Get in Touch</div>
                        <a href="" target="_blank" class="foot-link">Instagram</a>
                        <a href="" target="_blank" class="foot-link">Facebook</a>
                        <a href="" target="_blank" class="foot-link">Email us</a>
                        <a href="" target="_blank" class="foot-link">Call us</a>
                    </div>
                    <div class="foot-ul">
                        <div class="foot-label">Our Location</div>
                        <div class="foot-link">Lacken House</div>
                        <div class="foot-link">Dublin Road</div>
                        <div class="foot-link">Kilkenny</div>
                        <div class="foot-link">R95 KF34</div>
                    </div>
                </div>
            </div>
            <div class="foot-bottom">
                <div class="foot-copy">© 2025 Refrigeration Solutions — Website by <a href="https://nextdesignwebsite.com" target="_blank" class="foot-copy" style="text-decoration: underline;">Next Design</a>.</div>
            </div>
        </div>
    `

    document.body.prepend(header);
    document.body.prepend(menu);
    document.body.appendChild(footer);
    
    if(document.querySelector(".home")){
        document.querySelectorAll(".header-link")[0].classList.add("header-link-active");
    } else if(document.querySelector(".about")){
        document.querySelectorAll(".header-link")[1].classList.add("header-link-active");
    } else if(document.querySelector(".gallery")){
        document.querySelectorAll(".header-link")[2].classList.add("header-link-active");
    }
}
createHtml();

function toggleMenu(){
    if(!menuOpen){
        document.querySelector(".line1").style.top = "10px";
        document.querySelector(".line1").style.transform = "rotate(45deg)";
        document.querySelector(".line2").style.opacity = "0";
        document.querySelector(".line3").style.top = "-10px";
        document.querySelector(".line3").style.transform = "rotate(-45deg)";

        document.querySelector(".menu-container").style.top = "100px";
        menuOpen = true;
    } else {
        document.querySelector(".line1").style.top = "0px";
        document.querySelector(".line1").style.transform = "rotate(0deg)";
        document.querySelector(".line2").style.opacity = "1";
        document.querySelector(".line3").style.top = "0px";
        document.querySelector(".line3").style.transform = "rotate(0deg)";

        document.querySelector(".menu-container").style.top = "-216px";
        menuOpen = false;
    }
}

function startHeroInt(){
    heroImgInt = setInterval(() => {
        isSwitching = true;
        if(heroIdx == 2){
            heroIdx = 0;
        } else {
            heroIdx++; 
        }
        document.querySelector(".hero-img-active").classList.remove("hero-img-active");
        setTimeout(() => {
            isSwitching = false;
            document.querySelectorAll(".home-img")[heroIdx].classList.add("hero-img-active");
        }, 50);
    }, 10000);
}
if(document.querySelector(".hero-img-active")){
    startHeroInt();
}