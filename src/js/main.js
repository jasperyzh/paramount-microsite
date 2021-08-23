// jquery
const jQuery = require("jquery");
window.$ = window.jQuery = jQuery;

// import library
import "jquery-validation";


// import library
// import "jquery-validation";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-select";
/* // import js
import "./components/Testimonial.js";
import "./components/ScrollToSection.js";

// vue
import Webinar from './components/Webinar';

new Vue({ render: createElement => createElement(Webinar) }).$mount('#webinar'); */

import Vue from 'vue';
import NominationForm from './components/NominationForm';

// 

// console.log(document.querySelector("#nomination-form"));
if (document.querySelector("#nomination-form")) {
    new Vue({ render: createElement => createElement(NominationForm) }).$mount('#nomination-form');
}

// let vueApp = {
//     "#nomination-form'": NominationForm,
// };

// // load vue instances
// document.addEventListener("DOMContentLoaded", () => {
//     // if elementID exists > run vue instance
//     for (const key in vueApp) {
//         if (document.querySelector(key)) {
//             console.log("vueloaded", key);
//             // new Vue({
//             //     render: h => h(vueApp[key]),
//             // }).$mount(key);
// // new Vue({ render: createElement => createElement(NominationForm) }).$mount('#nomination-form');

//             new Vue({ render: createElement => createElement(vueApp[key]) }).$mount(`#${key}`);

//         }
//     }
// });


// Remember to include the smooth scroll polyfill:
// (https://github.com/iamdustan/smoothscroll)

// To Section
/* const navLinks = document.querySelectorAll(
    'nav ul li a'
);

Array.from(navLinks).forEach(navLink => {
    const href = navLink.getAttribute('href');
    const section = document.querySelector(href);
    const offset = 20; // nav and offset

    navLink.onclick = e => {
        // get body position
        const bodyRect = document.body.getBoundingClientRect().top;
        // get section position relative
        const sectionRect = section.getBoundingClientRect().top;
        // subtract the section from body
        const sectionPosition = sectionRect - bodyRect;
        // subtract offset
        const offsetPosition = sectionPosition - offset;

        e.preventDefault();
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}) */


// scroll-to-top
/* document.querySelector('#top').onclick = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
} */


//copy link
const copy_button = document.querySelector("#copy_link");
// console.log(copy_button)
if (copy_button) {
    copy_button.addEventListener("click", function () {
        let copyText = document.getElementById("myInput");
        console.log(copyText);

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        /* Alert the copied text *
/* Alert the copied text */
        console.log("Copied the text: " + copyText.value);
    });
}
