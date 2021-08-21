<template>
  <form id="nomination-form" class="container needs-validation" novalidate="">
    <div class="row justify-content-around">
      <div class="col-md-5">
        <h3 class="text-uppercase">Nominee’s Information</h3>
        <p>Fill in your nominee’s information.</p>
        <p><small>*Required fields marked with asterisks.</small></p>

        <div class="mb-3">
          <label for="fullname">Full name*</label>
          <div class="input-group">
            <div class="input-group-prepend">
            </div>
            <input
              type="text"
              class="form-control"
              id="fullname"
              placeholder="Fill in your nominee's fullname"
              required=""
            />
            <div class="invalid-feedback" style="width: 100%">
              Your username is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="e.g.yournominee@gmail.com"
          />
          <div class="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <div class="mb-3">
          <label for="phone">Phone number</label>
          <input
            type="phone"
            class="form-control"
            id="phone"
            placeholder="e.g. +60123456789"
          />
          <div class="invalid-feedback">Please enter a valid phone number.</div>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1"
            >What impact has this neighbourhood hero made in your
            community?</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Tell us your story (The more detailed the better)"
          ></textarea>
        </div>

        <div class="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              By submitting this, you agree to the Terms and Conditions.
            </label>
            <div class="invalid-feedback">
              You must agree to the Terms and Conditions.
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-5">
        <h3 class="text-uppercase">Nominee’s Information</h3>
        <p>Fill in your nominee’s information.</p>
        <p><small>*Required fields marked with asterisks.</small></p>

        <div class="mb-3">
          <label for="fullname">Full name*</label>
          <div class="input-group">
            <div class="input-group-prepend">
            </div>
            <input
              type="text"
              class="form-control"
              id="fullname"
              placeholder="Fill in your nominee's fullname"
              required=""
            />
            <div class="invalid-feedback" style="width: 100%">
              Your username is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="e.g.yournominee@gmail.com"
          />
          <div class="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <div class="mb-3">
          <label for="phone">Phone number</label>
          <input
            type="phone"
            class="form-control"
            id="phone"
            placeholder="e.g. +60123456789"
          />
          <div class="invalid-feedback">Please enter a valid phone number.</div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center my-4">
      <div class="col-auto">
        <a href="../../thank-you.html" class="nav-link btn btn-primary">SUBMIT YOUR NOMINATION</a>
        <!--<button class="btn btn-primary btn-lg btn-block" type="submit">
          SUBMIT YOUR NOMINATION
        </button>-->
      </div>
    </div>
  </form>
</template>
<script>
export default {
  // mounted() {
  //   // form submission
  //   (function ($) {
  //     // serializeObject is not a core function of jQuery
  //     $.fn.serializeObject = function () {
  //       var o = {};
  //       var a = this.serializeArray();
  //       $.each(a, function () {
  //         if (o[this.name]) {
  //           if (!o[this.name].push) {
  //             o[this.name] = [o[this.name]];
  //           }
  //           o[this.name].push(this.value || " ");
  //         } else {
  //           o[this.name] = this.value || "";
  //         }
  //       });
  //       return o;
  //     };
  //     $.validator.addMethod(
  //       "lettersonly",
  //       function (value, element) {
  //         return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
  //       },
  //       "Letters only please"
  //     );
  //     $.validator.addMethod(
  //       "emailExtraCheck",
  //       function (value, element) {
  //         return (
  //           this.optional(element) ||
  //           /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
  //             value
  //           )
  //         );
  //         // return regex.test(email);
  //       },
  //       "Please enter a valid email address"
  //     );
  //     // form selector
  //     var $form = $("form#gform-mckl");
  //     // url of gsheet webapp
  //     var gsheet_url =
  //       "https://script.google.com/macros/s/AKfycbyhquZbpcdfgVBRoyUX3AkKrByty1j2u7ZoTi7NIBo8wrVQoV4oGMud4TzfCwvU0mlNgA/exec";
  //     // jquery validation
  //     $form.validate({
  //       rules: {
  //         full_name: {
  //           required: true,
  //           lettersonly: true,
  //           minlength: 5,
  //           maxlength: 120,
  //         },
  //         email: {
  //           required: true,
  //           email: true,
  //           emailExtraCheck: true,
  //         },
  //         mobile_phone: {
  //           required: true,
  //           number: true,
  //           minlength: 8,
  //           maxlength: 15,
  //         },
  //         programme_interested: {
  //           required: true,
  //         },
  //       },
  //       // Specify validation error messages
  //       messages: {
  //         full_name: {
  //           required: "Please enter your full name",
  //           lettersonly: "Please enter your name in alphabet only",
  //           minlength: "Your name is too short",
  //           maxlength: "Your name is too long",
  //         },
  //         email: "Please enter a valid email address",
  //         mobile_phone: {
  //           required: "Please enter your contact number",
  //           number: "Number only, no special character required",
  //           minlength: "Your phone number is too short",
  //           maxlength: "Your phone number is too long",
  //         },
  //         programme_interested: {
  //           required: "Please select your preference",
  //         },
  //       },
  //       // debug: true,
  //       /*  submitHandler: function (form) {
  //          $("#gform-mckl__submit").prop('disabled', true);
  //          // form.submit();
  //      } */
  //     });
  //     $form.submit(function (e) {
  //       if (!$form.valid()) {
  //         console.log("form not valid !!");
  //         return;
  //       }
  //       // check valid
  //       // get sanitized formdata
  //       let formdata = get_form_data($form);
  //       console.log(formdata);
  //       // submit form
  //       form_submit_to_google_sheet(formdata, gsheet_url);
  //       // go to thank you page
  //       return false;
  //     });
  //     // func - get sanitized formdata
  //     function get_form_data(element) {
  //       var data = element.serializeObject();
  //       data.programme_interested = data.programme_interested.toString();
  //       // gsheet - https://docs.google.com/spreadsheets/d/1RTfHGUgFTJ1ut3GAfeNXCTP3o6nNXFF_ITNACk4qH4M/edit#gid=0
  //       data.sheet_name = "openday";
  //       console.log(data);
  //       return data;
  //     }
  //     // func - ajax for form submission
  //     function form_submit_to_google_sheet(data, url) {
  //       $.ajax({
  //         url: url,
  //         method: "GET",
  //         dataType: "json",
  //         crossDomain: true,
  //         data: data,
  //         beforeSend: function () {
  //           $("#gform-mckl__submit").prop("disabled", true);
  //           // console.log('beforesend: sending')
  //         },
  //         success: function (xhr, status, error) {
  //           console.log(xhr, status, error);
  //           window.location.href = "./thank-you.html";
  //         },
  //         error: function (xhr, status, error) {
  //           console.log(xhr, status, error);
  //           $("#gform-mckl__submit").prop("disabled", false);
  //         },
  //       });
  //     }
  //     // bootstrap-picker
  //     $(".programme-picker").selectpicker({
  //       noneSelectedText: "Please choose your programmes",
  //     });
  //   })(jQuery);
  // },
  // data() {
  //   return {};
  // },
};
</script>
