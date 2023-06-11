












































let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let logOut = document.querySelector(".logOut");
let userName = document.querySelector(".userName");
currentUser = currentUser[0].email;
userName.innerHTML = currentUser;
logOut.addEventListener("click", function () {
    currentUser = [];
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "http://127.0.0.1:5501/trang%20ch%E1%BB%A7/index.html";
});