function diving() {
  let name = prompt("What is your name?");
  let email = prompt("What is you email address?");
  let freediving = prompt("Would you like to learn freediving?");

  if (freediving === "yes") {
    alert(
      "Thank you " +
        name +
        ". We will send you some information by email about our classes."
    );
  } else {
    alert(
      "Thank you " +
        name +
        ". We will send you some information by email in case you change your mind."
    );
  }
}

let contactButton = document.querySelector("button");
contactButton.addEventListener("click", diving);
