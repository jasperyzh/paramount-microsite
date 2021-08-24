<template>
  <form id="nomination-form" class="container needs-validation" novalidate>
    <!-- <form id="test-form">
      <input type="text" name="full_name" id="full_name" value="adam smith" />
      <textarea name="story" id="story" cols="30" rows="10"></textarea>
      <button type="submit" id="test-form__submit">Submit</button>
    </form> -->

    <div class="row justify-content-around">
      <div class="col-md-5">
        <h3 class="text-uppercase">Nominator’s Information</h3>
        <p>Fill in your nominator’s information.</p>
        <p><small>*Required fields marked with asterisks.</small></p>

        <div class="mb-3">
          <label for="full_name">Full name <span>*</span></label>
          <div class="input-group">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              name="full_name"
              id="full_name"
              placeholder="Fill in your Nominator's Full Name"
              required
              :value="form_data.full_name"
            />
            <div class="invalid-feedback" style="width: 100%">
              Your full_name is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email <span>*</span></label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="e.g. yournominator@gmail.com"
            required
            :value="form_data.email"
          />
          <div class="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <div class="mb-3">
          <label for="phone">Phone number <span>*</span></label>
          <input
            type="phone"
            class="form-control"
            name="phone"
            id="phone"
            placeholder="e.g. +60123456789"
            :value="form_data.phone"
          />
          <div class="invalid-feedback">Please enter a valid phone number.</div>
        </div>

        <div class="form-group">
          <label for="story"
            >What impact has this neighbourhood hero made in your
            community?</label
          >
          <textarea
            class="form-control"
            name="story"
            id="story"
            rows="6"
            placeholder="Tell us your story (The more detailed the better)"
            :value="form_data.story"
          ></textarea>
        </div>
      </div>

      <div class="col-md-5">
        <h3 class="text-uppercase">Nominee’s Information</h3>
        <p>Fill in your nominee’s information.</p>
        <p><small>*Required fields marked with asterisks.</small></p>

        <div class="mb-3">
          <label for="nominee_name">Full name <span>*</span></label>
          <div class="input-group">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              name="nominee_name"
              id="nominee_name"
              placeholder="Fill in your Nominee's Full Name"
              required
              :value="form_data.nominee_name"
            />
            <div class="invalid-feedback" style="width: 100%">
              Your full name is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="nominee_email">Email</label>
          <input
            type="email"
            class="form-control"
            name="nominee_email"
            id="nominee_email"
            placeholder="e.g. yournominee@gmail.com"
            :value="form_data.nominee_email"
          />
          <div class="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <div class="mb-3">
          <label for="nominee_phone">Phone number</label>
          <input
            type="text"
            class="form-control"
            name="nominee_phone"
            id="nominee_phone"
            placeholder="e.g. +60123456789"
            :value="form_data.nominee_phone"
          />
          <div class="invalid-feedback">Please enter a valid phone number.</div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center my-4">
      <div class="col-12 text-center">
        <div class="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="tnc"
              id="tnc"
              required
              :checked="form_data.tnc"
            />
            <label class="form-check-label" for="tnc">
              By submitting this, you agree to the Terms and Conditions.
            </label>
            <div class="invalid-feedback">
              You must agree to the Terms and Conditions.
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <button
          class="btn btn-primary btn-lg btn-block"
          type="submit"
          id="nomination-form__submit"
        >
          SUBMIT YOUR NOMINATION
        </button>
      </div>
    </div>
  </form>
</template>
<script>
// gsheet webapp url - https://script.google.com/macros/s/AKfycbzIl0jqbHq21bK6Ls06_MLk8Nk-tq7vNCkVUJv_lhyBeB39keO6Pcoaz_pQ9xdpQJkd/exec

export default {
  data() {
    return {
      form_data: {
        full_name: "",
        email: "",
        phone: "",
        story: "",
        nominee_name: "",
        nominee_email: "",
        nominee_phone: "",
        tnc: "",

        /* full_name: "Adam Smith",
        email: "adam@email.com",
        phone: "0109992222",
        story:
          "Although it may seem self-evident that the resources of our planet are limited and thus could not support indefinite exponential growth in the consumption of resources, the challenge has failed to generate enough attention. Even the report published in 1972 entitled Limits to Growth, sponsored by the Club of Rome, met with resistance and did not succeed in mobilizing public opinion at the time. The report estimated that constraints to growth would start to impact more visibly in the 21st century.",
        nominee_name: "Ah Meng",
        nominee_email: "ahmeng@email.com",
        nominee_phone: "0138884444",
        tnc: "checked", */
      },
    };
  },
  mounted() {
    (function ($) {
      // serializeObject is not a core function of jQuery
      $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
          if (o[this.name]) {
            if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || " ");
          } else {
            o[this.name] = this.value || "";
          }
        });
        return o;
      };
      $.validator.addMethod(
        "lettersonly",
        function (value, element) {
          return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
        },
        "Letters only please"
      );
      $.validator.addMethod(
        "emailExtraCheck",
        function (value, element) {
          return (
            this.optional(element) ||
            /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
              value
            )
          );
          // return regex.test(email);
        },
        "Please enter a valid email address"
      );

      const $form = $("#nomination-form");
      const $submit_btn = $("#nomination-form__submit");

      const gsheet_url =
        "https://script.google.com/macros/s/AKfycbzIl0jqbHq21bK6Ls06_MLk8Nk-tq7vNCkVUJv_lhyBeB39keO6Pcoaz_pQ9xdpQJkd/exec";
      const gsheet_name = "jiran";

      $form.submit((e) => {
        e.preventDefault();

        if (!$form.valid()) {
          return;
        }

        let formdata = get_form_data($form, gsheet_name);
        console.log(formdata, gsheet_url);

        // validation check

        $.ajax({
          url: gsheet_url,
          method: "GET",
          dataType: "json",
          crossDomain: true,
          data: formdata,
          beforeSend: () => {
            /**
             * disable submit button
             */
            $submit_btn.prop("disabled", true);
          },
          success: (xhr, status, error) => {
            console.log(xhr, status, error);

            /**
             * redirect
             */
            window.location.href = "./thank-you.html";
          },
          error: (xhr, status, error) => {
            console.log(xhr, status, error);
            /**
             * enable submit button
             */
            $submit_btn.prop("disabled", false);
          },
        });

        // go to thank you page
        return false;
      });

      function get_form_data(form, sheet_name) {
        let data = form.serializeObject();
        data.sheet_name = sheet_name;
        // add slashes for escape string - https://stackoverflow.com/questions/770523/escaping-strings-in-javascript
        data.story = (data.story + "")
          .replace(/[\\"']/g, "\\$&")
          .replace(/\u0000/g, "\\0");
        return data;
      }

      // validate setup
      $form.validate({
        rules: {
          full_name: {
            required: true,
            lettersonly: true,
          },
          email: {
            required: true,
            email: true,
            emailExtraCheck: true,
          },
          phone: {
            required: true,
            number: true,
            minlength: 8,
            maxlength: 15,
          },
          nominee_name: {
            required: true,
            lettersonly: true,
          },
          tnc: {
            required: true,
          },
          story: {
            required: true,
          },
        },
        // Specify validation error messages
        messages: {
          full_name: {
            required: "Please enter your full name",
            lettersonly: "Please enter your name in alphabet only",
          },
          email: "Please enter a valid email address",
          phone: {
            required: "Please enter your contact number",
            number: "Number only, no special character required",
            minlength: "Your phone number is too short",
            maxlength: "Your phone number is too long",
          },
          nominee_name: {
            required: "Please enter your nominee's name",
            lettersonly: "Please enter your nominee's name in alphabet only",
          },
          story: "We would like to hear your story.",
          tnc: "(Required)",
        },
        // debug: true,
      });
    })(jQuery);
  },
};
</script>
