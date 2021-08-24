// jquery
const jQuery = require("jquery");
window.$ = window.jQuery = jQuery;

// libraries
import "jquery-validation";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-select";


// vue
import Vue from 'vue';
import NominationForm from './components/NominationForm';
if (document.querySelector("#nomination-form")) {
    new Vue({ render: createElement => createElement(NominationForm) }).$mount('#nomination-form');
}


document.addEventListener("DOMContentLoaded", e => {

    // default
    onLoadScrollTo();

    // anchor
    onClickScrollTo();
})

function onLoadScrollTo() {
    const url = window.location.href;
    if (!url.includes("#")) {
        return;
    }
    // console.log('yay')
    const hash = url.split('#').pop();

    if (hash) {
        const offset = 40;
        const section = document.querySelector(`#${hash}`);
        const bodyRect = document.body.getBoundingClientRect().top;
        const sectionRect = section.getBoundingClientRect().top;
        const sectionPosition = sectionRect - bodyRect;
        const offsetPosition = sectionPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    // console.log(`found #${hash} in url`)
}

function onClickScrollTo() {
    // To Section
    const navLinks = document.querySelectorAll(
        '.navbar .nav-link'
    );
    Array.from(navLinks).forEach(navLink => {
        // const href = navLink.getAttribute('href');
        const href = navLink.getAttribute('data-anchor');

        const section = document.querySelector(href);
        const offset = 40; // nav and offset

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
    })
}

//copy link
const copy_button = document.querySelector("#copy_link");
if (copy_button) {
    copy_button.addEventListener("click", function () {
        let copyText = document.getElementById("myInput");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
    });
}
