function checkLogin(event) {
  event.preventDefault();
  console.log(event);
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Bad practice: checking login on client side (intended for CTF)
  if (username === "admin" && password === "password123") {
    document.getElementById("message").innerHTML = 
      "<strong>Welcome admin!</strong><br>Flag: <code>FLAG{client_side_logic_is_weak}</code>";
  } else {
    document.getElementById("message").innerText = "Login failed. Try again.";
  }
}


