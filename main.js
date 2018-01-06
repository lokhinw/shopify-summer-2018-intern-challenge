function validateForm() {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email = document.getElementById("email");
  var span = document.getElementById("error-message");
  var dropdown = document.getElementById("dropdown");

  if (regex.test(email.value) == false) {
    if (span.style.display = "none") {
      span.style.display = "inline-block";
    }
    return false;
  } else {
    console.log("Email: " + email.value);
    console.log("Interested in: " + dropdown.value);
    return true;
  }
}
