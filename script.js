function showPage(pageId) {

    // تمام pages بند کریں

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    // منتخب page کھولیں

    const selectedPage =
        document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    // اوپر لے جائیں

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


    // Mobile menu بند کریں

    const navMenu =
        document.getElementById("navMenu");

    navMenu.classList.remove("show");

}



/* MOBILE MENU */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener(
    "click",
    function(){

        navMenu.classList.toggle("show");

    }
);



/* ADMISSION FORM */

const admissionForm =
    document.getElementById("admissionForm");

const admissionMessage =
    document.getElementById("admissionMessage");


admissionForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        admissionMessage.innerHTML =
        "Thank you! Your admission application has been submitted successfully.";

        admissionMessage.style.color =
        "green";

        admissionForm.reset();

    }
);



/* CONTACT FORM */

const contactForm =
    document.getElementById("contactForm");

const contactMessage =
    document.getElementById("contactMessage");


contactForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        contactMessage.innerHTML =
        "Thank you! Your message has been submitted successfully.";

        contactMessage.style.color =
        "green";

        contactForm.reset();

    }
);