const loginForm = document.querySelector(".content_login");
const loginInput = document.querySelector(".user_name");
const loginBtn = document.querySelector(".login_btn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(loginInput.value !== "") {
    loginForm.innerText = `Welcome ${loginInput.value}`;
    let logout_btn = document.createElement("div");
    logout_btn.innerHTML = `<button class="logout_btn">Log Out</button>`;
    loginForm.appendChild(logout_btn);
  }
})
