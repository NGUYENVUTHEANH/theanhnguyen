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
let adidas = JSON.parse(localStorage.adidas);
let postContainer2 = document.querySelector(".head333");
postContainer2.innerHTML = "";
adidas.forEach((element) => {
    postContainer2.innerHTML +=
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
let balmain = JSON.parse(localStorage.balmain);
let postContainer3 = document.querySelector(".head334");
postContainer3.innerHTML = "";
balmain.forEach((element) => {
    postContainer3.innerHTML +=
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
let balenciaga = JSON.parse(localStorage.balenciaga);
let postContainer4 = document.querySelector(".head335");
postContainer4.innerHTML = "";
balenciaga.forEach((element) => {
    postContainer4.innerHTML +=
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
let btnLogin = document.getElementById("logIn");
let overLay = document.querySelector(".overLay");
// let currentUser = [];
btnLogin.addEventListener("click", function () {
    overLay.style.display = "block";
});
overLay.addEventListener("click", function (event) {
    if (event.target === overLay) {
        overLay.style.display = "none";
    }
})
let usermail = document.querySelector("#usermail");
let password = document.querySelector("#password");
let btnCorrect = document.querySelector("#btnCorrect");
let formlogin = document.querySelector(".formlogin");
let userName = document.querySelector(".userName");
let khoa = document.querySelector(".khoa");
let thongtin = JSON.parse(localStorage.getItem("thongtin"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
formlogin.addEventListener("submit", function (e) {
    e.preventDefault();
    let emailValue = usermail.value;
    let passwordValue = password.value;
    let findUser = thongtin.filter(function (user) {
        if (user.email === emailValue && user.password === passwordValue) {
            user.active = "olline";
            currentUser[0] = user;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            let findIndex = thongtin.findIndex(function (element, index) {
                return element.id == user.id;
            });
            thongtin[findIndex].active = "olline";
            localStorage.thongtin = JSON.stringify(thongtin);
            if (user.block == "block") {
                alert("tài khoản của bạn đã bị khoá")
                khoa.style.display = "block"
            }
        }
    });
    let canhan = document.querySelector(".canhan");
    if (findUser) {
        userName.innerHTML = emailValue;
        overLay.style.display = "none";
    }
});
let logOut = document.querySelector(".logOut");
currentUser = currentUser[0].email;
userName.innerHTML = currentUser;
logOut.addEventListener("click", function () {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let findIndex2 = thongtin.findIndex(function (element, index) {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        return element.id == currentUser[0].id;
    });
    console.log(currentUser[0].id);
    console.log(findIndex2)
    thongtin[findIndex2].active = "offline";
    localStorage.thongtin = JSON.stringify(thongtin);
    currentUser = [];
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "http://127.0.0.1:5501/trang%20ch%E1%BB%A7/index.html";
});