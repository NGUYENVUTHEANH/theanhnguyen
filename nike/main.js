










let giays = JSON.parse(localStorage.giay);
let postContainer = document.querySelector(".head332");
postContainer.innerHTML = "";
giays.forEach((element) => {
    postContainer.innerHTML +=
        `                        <div class="head3321">
        <a href="/trang phụ /index.html?id=${element.id}" id="${element.id}" style="color: pink;">
            <img src="${element.img}" alt="">
            <div class="head33211">$${element.gia} ~ Có sẵn</div>
            <div class="head33212"><b>Số lượng 99+</b></div>
            <div class="head33213">${element.name}</div>
            <div class="head332131">
            </div>
        </a>

    </div>`
});

































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