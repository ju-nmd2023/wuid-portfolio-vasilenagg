document.getElementById("submitb").addEventListener("click", function () {
  let name = document.getElementById("name").value;

  if (name !== "") {
    //check if 'name' input is not empty
    alert("Thank you for your message, " + name);
  }

  let message = document.getElementById("message").value;

  if (message !== "") {
    //check if 'message' input is not empty
    alert("Your message: " + message);
  }
});
