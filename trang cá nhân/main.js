




let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let datt = JSON.parse(localStorage.datt);
let postContainer2 = document.querySelector(".head31");
let head111 = document.querySelectorAll(".size-dropdown")
let post3 = []
postContainer2.innerHTML = "";
for (i = 0; i < datt.length; i++) {
    if (currentUser[0].id === datt[i].id) {
        postContainer2.innerHTML +=
            `<div class="head311" id="${datt[i].id}">
                <img src="${datt[i].img}" alt="">
                <div class="head3111">
                    <div class="head31111">
                        <h5><b>${datt[i].name}</b></h5>
                    </div>
                    <div class="head31112">${datt[i].kieu}</div>
                    <div class="head31113">Size ${datt[i].size}</div>
                    <div class="head31114">$${datt[i].gia}</div>
                    <button>${datt[i].tinhtrang}</button>
                </div>
                <hr>
            </div>`
            ;

    }
}








































let logOut = document.querySelector(".logOut");
let userName = document.querySelector(".userName");
currentUser = currentUser[0].email;
userName.innerHTML = currentUser;
logOut.addEventListener("click", function () {
    currentUser = [];
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "http://127.0.0.1:5501/trang%20ch%E1%BB%A7/index.html";
});