let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let chuatt = JSON.parse(localStorage.chuatt);
let postContainer2 = document.querySelector(".head31");
let postContainer = document.querySelector(".head325");
postContainer.innerHTML = "";
let head324 = document.querySelectorAll(".head324")
let head3242 = document.querySelectorAll(".head3242")
let head111 = document.querySelectorAll(".size-dropdown")
let post3 = []
postContainer2.innerHTML = "";
for (i = 0; i < chuatt.length; i++) {
    if (currentUser[0].id === chuatt[i].id) {
        postContainer2.innerHTML +=
            `<div class="head311" id="${chuatt[i].id}">
                <img src="${chuatt[i].img}" alt="">
                <div class="head3111">
                    <div class="head31111">
                        <h5><b>${chuatt[i].name}</b></h5>
                    </div>
                    <div class="head31112">${chuatt[i].kieu}</div>
                    <div class="head31113">Size ${chuatt[i].size}</div>
                    <div class="head31114">$${chuatt[i].gia}</div>
                    <button class="delete-btn" id="${chuatt[i].id}" onclick="xoaSanpham('${chuatt[i].idd}')">Xoá</button>
                </div>
                <hr>
            </div>`
            ;

        postContainer.innerHTML +=
            `<div class="head324">
                <div class="head3241">${chuatt[i].name}</div>
                <div class="head3242">${chuatt[i].gia}</div>
            </div>`
        post3.unshift(chuatt[i].gia)
    }
}


function tongArray(post3) {
    tong = 0
    for (let i = 0; i < post3.length; i++) {
        tong += +post3[i]
    }
    return tong;
}

let postContainergio = document.querySelector(".head323");
postContainergio.innerHTML = "";
chuatt.forEach(() => {
    postContainergio.innerHTML =
        `<div class="head3221">Subtotal</div>
        <div class="head3222">$ ${tongArray(post3)}</div>`
});
let thue = tongArray(post3) * 8
let thue2 = thue / 100
let postContainergio2 = document.querySelector(".head326");
postContainergio2.innerHTML = "";
chuatt.forEach(() => {
    postContainergio2.innerHTML =
        `<div class="head3221">Thuế 8%</div>
        <div class="head3222">$ ${thue2}</div>`
});
let total = thue2 + tongArray(post3)
let postContainergio3 = document.querySelector(".head322");
postContainergio3.innerHTML = "";
chuatt.forEach(() => {
    postContainergio3.innerHTML =
        `<div class="head3221">Total</div>
        <div class="head3222">$ ${total}</div>`
});


function xoaSanpham(idd) {
    console.log(idd);
    let findIndex = chuatt.findIndex(function (element, index) {
        return idd == element.idd;

    });
    console.log(findIndex);
    chuatt.splice(findIndex, 1);
    localStorage.chuatt = JSON.stringify(chuatt);

    let chuatts = JSON.parse(localStorage.chuatt);
    postContainer3.innerHTML = "";
    for (i = 0; i < chuatts.length; i++) {
        if (currentUser[0].id === chuatts[i].id) {
            postContainer3.innerHTML +=
                `<div class="head311" id="${chuatts[i].id}">
                    <img src="${chuatts[i].img}" alt="">
                    <div class="head3111">
                        <div class="head31111">
                            <h5><b>${chuatts[i].name}</b></h5>
                        </div>
                        <div class="head31112">${chuatts[i].kieu}</div>
                        <div class="head31113">Size ${chuatts[i].size}</div>
                        <div class="head31114">$${chuatts[i].gia}</div>
                        <button class="delete-btn" id="${chuatts[i].id}" onclick="xoaSanpham('${chuatts[i].idd}')">Xoá</button>
                    </div>
                    <hr>
                </div>`
                ;
            postContainer3.innerHTML +=
                `<div class="head324">
            <div class="head3241">${chuatts[i].name}</div>
            <div class="head3242">${chuatts[i].gia}</div>
        </div>`
            post3.unshift(chuatts[i].gia)
        }
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















































