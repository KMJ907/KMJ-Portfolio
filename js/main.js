/* ==========================================================
   KMJ Portfolio v1
   main.js

   Features:
   - Header Scroll Effect
   - Mobile Menu
   - Scroll Reveal
   - Progress Bar
   - Active Navigation
   - Back To Top
   ========================================================== */


/* ==========================================================
   DOM READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {


    console.log("KMJ Portfolio Loaded");


    /* Initialize */

    initHeader();

    initProgressBar();

    initMobileMenu();

    initReveal();

    initActiveNavigation();

    initBackToTop();


});

/* ==========================================================
   HEADER SCROLL EFFECT
========================================================== */


function initHeader(){

    const header = document.querySelector("#header");


    if(!header) return;


    function handleScroll(){


        if(window.scrollY > 50){

            header.classList.add("scrolled");


        }else{

            header.classList.remove("scrolled");

        }


    }


    window.addEventListener(
        "scroll",
        handleScroll
    );


    // 초기 상태 확인

    handleScroll();


}

/* ==========================================================
   SCROLL PROGRESS BAR
========================================================== */


function initProgressBar(){

    const progressBar =
        document.querySelector("#progress-bar");


    if(!progressBar) return;



    function updateProgress(){


        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement.scrollHeight
            - window.innerHeight;


        const progress =
            (scrollTop / documentHeight) * 100;



        progressBar.style.width =
            `${progress}%`;


    }



    window.addEventListener(
        "scroll",
        updateProgress
    );


    updateProgress();


}

/* ==========================================================
   MOBILE MENU
========================================================== */


function initMobileMenu(){


    const menuButton =
        document.querySelector(".menu-toggle");


    const mobileMenu =
        document.querySelector(".mobile-menu");


    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu a"
        );



    if(!menuButton || !mobileMenu)
        return;



    // 메뉴 버튼 클릭

    menuButton.addEventListener(
        "click",
        () => {


            menuButton.classList.toggle(
                "active"
            );


            mobileMenu.classList.toggle(
                "active"
            );


        }
    );




    // 메뉴 링크 클릭 시 닫기

    mobileLinks.forEach(link => {


        link.addEventListener(
            "click",
            () => {


                menuButton.classList.remove(
                    "active"
                );


                mobileMenu.classList.remove(
                    "active"
                );


            }
        );


    });




    // 바깥 클릭 시 닫기

    document.addEventListener(
        "click",
        (event) => {


            const clickedInside =
                menuButton.contains(event.target)
                ||
                mobileMenu.contains(event.target);



            if(!clickedInside){


                menuButton.classList.remove(
                    "active"
                );


                mobileMenu.classList.remove(
                    "active"
                );


            }


        }
    );



}

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */


function initActiveNavigation(){


    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );



    if(
        sections.length === 0 ||
        navLinks.length === 0
    )
        return;




    function updateActiveNav(){


        let currentSection = "";



        sections.forEach(
            section => {


                const sectionTop =
                    section.offsetTop - 150;


                const sectionHeight =
                    section.offsetHeight;



                if(
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ){

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }


            }
        );



        navLinks.forEach(
            link => {


                link.classList.remove(
                    "active"
                );



                const href =
                    link.getAttribute(
                        "href"
                    );



                if(
                    href ===
                    `#${currentSection}`
                ){

                    link.classList.add(
                        "active"
                    );

                }


            }
        );


    }




    window.addEventListener(
        "scroll",
        updateActiveNav
    );



    updateActiveNav();


}

/* ==========================================================
   BACK TO TOP
========================================================== */


function initBackToTop(){


    const button =
        document.querySelector(
            "#back-to-top"
        );



    if(!button)
        return;



    function toggleButton(){


        if(window.scrollY > 500){


            button.classList.add(
                "show"
            );


        }else{


            button.classList.remove(
                "show"
            );


        }


    }




    window.addEventListener(
        "scroll",
        toggleButton
    );



    toggleButton();





    button.addEventListener(
        "click",
        () => {


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        }
    );


}

/* ==========================================================
   UTILITIES & FINAL
========================================================== */


/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function initSmoothScroll(){


    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );



    links.forEach(link => {


        link.addEventListener(
            "click",
            event => {


                const targetId =
                    link.getAttribute(
                        "href"
                    );



                const target =
                    document.querySelector(
                        targetId
                    );



                if(target){


                    event.preventDefault();



                    const headerHeight =
                        document.querySelector(
                            "#header"
                        )?.offsetHeight || 0;



                    const targetPosition =
                        target.offsetTop
                        -
                        headerHeight;



                    window.scrollTo({

                        top:targetPosition,

                        behavior:"smooth"

                    });


                }


            }
        );


    });


}




/* ==========================================================
   ESC CLOSE MOBILE MENU
========================================================== */

function initKeyboardEvents(){


    document.addEventListener(
        "keydown",
        event => {


            if(event.key === "Escape"){


                const menuButton =
                    document.querySelector(
                        ".menu-toggle"
                    );


                const mobileMenu =
                    document.querySelector(
                        ".mobile-menu"
                    );



                if(
                    menuButton &&
                    mobileMenu
                ){


                    menuButton.classList.remove(
                        "active"
                    );


                    mobileMenu.classList.remove(
                        "active"
                    );


                }


            }


        }
    );


}




/* ==========================================================
   IMAGE LOADING
========================================================== */

function initImageLoading(){


    const images =
        document.querySelectorAll(
            "img"
        );



    images.forEach(image => {


        image.loading = "lazy";



        image.addEventListener(
            "load",
            () => {


                image.classList.add(
                    "loaded"
                );


            }
        );


    });


}




/* ==========================================================
   EXTERNAL LINKS
========================================================== */

function initExternalLinks(){


    const links =
        document.querySelectorAll(
            'a[target="_blank"]'
        );



    links.forEach(link => {


        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );


    });


}





/* ==========================================================
   PAGE READY
========================================================== */


window.addEventListener(
    "load",
    () => {


        document.body.classList.add(
            "loaded"
        );


    }
);




/* ==========================================================
   START UTILITIES
========================================================== */


initSmoothScroll();

initKeyboardEvents();

initImageLoading();

initExternalLinks();

