---
layout: page
title: Contact Me 📨📮
permalink: /contact/
---
<style>
.container {
  margin-top: 25px;
  width: 80%;
}

#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm fieldset,
#fs-frm optgroup,
#fs-frm label,
#fs-frm #card-element:disabled {
  font-family: Roboto, "Noto Sans SC", "Noto Sans TC";
	font-size: 100%;
	color: inherit;
	border: none;
	border-radius: 0;
	display: block;
	width: 100%;
	padding: 0;
	margin: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
}

#fs-frm label,
#fs-frm legend,
#fs-frm ::placeholder {
	font-size: .825rem;
	margin-bottom: .5rem;
	padding-top: .2rem;
	display: flex;
	align-items: baseline;
}


/* border, padding, margin, width */

#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm #card-element {
	border: 1px solid #6272a4;
	background-color: #282a36;
	padding: .75em 1rem;
	margin-bottom: 1.5rem;
}

#fs-frm input:focus,
#fs-frm select:focus,
#fs-frm textarea:focus {
	background-color: #44475a;
	outline-style: solid;
	outline-width: thin;
	outline-color: #282a36;
	outline-offset: -1px;
}

#fs-frm [type="text"],
#fs-frm [type="email"] {
	width: 100%;
}

#fs-frm [type="button"],
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
  background-color: #bd93f9;
	outline-color: #282a36;
	color: #282a36;
	width: auto;
	cursor: pointer;
	-webkit-appearance: button;
	-moz-appearance: button;
	appearance: button;
}

#fs-frm [type="button"]:hover,
#fs-frm [type="submit"]:hover,
#fs-frm [type="reset"]:hover {
	background-color: #50fa7b;
	outline-color: #282a36;
	color: #282a36;
}

#fs-frm [type="button"]:focus,
#fs-frm [type="submit"]:focus,
#fs-frm [type="reset"]:focus {
	background-color: #ff79c6;
	outline-color: #282a36;
	color: #282a36;
}

#fs-frm [type="submit"],
#fs-frm [type="reset"] {
	margin-bottom: 0;
}
</style>

<div class="container">
 <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xgedzeel" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="">
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>
  <input type="submit" value="Submit">
</form>
</div>

<script>
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
</script>