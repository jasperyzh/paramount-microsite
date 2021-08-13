// jquery
const jQuery = require("jquery");
window.$ = window.jQuery = jQuery;

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
new Vue({ render: createElement => createElement(NominationForm) }).$mount('#nomination-form');
