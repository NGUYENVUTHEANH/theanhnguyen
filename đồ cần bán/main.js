let mainForm = document.getElementById("main-form");
let giay = JSON.parse(localStorage.getItem("giay"));
let email3 = JSON.parse(localStorage.getItem("email3"));
let error = "";
let errorContainer = document.querySelector(".error");
let email2 = []
mainForm.addEventListener("submit", function (e) {
    event.preventDefault();
    let newBookmark = {
        id: Math.floor(Math.random() * 100000000000000),
        name: mainForm.name.value,
        kieu: mainForm.kieu.value,
        gia: mainForm.gia.value,
        thong: mainForm.thong.value,
        img: mainForm.img.value,
        img1: mainForm.img1.value,
        img2: mainForm.img2.value,
        img3: mainForm.img3.value,
        img4: mainForm.img4.value,
        img5: mainForm.img5.value,
        img6: mainForm.img6.value,
        img7: mainForm.img7.value,
        img8: mainForm.img8.value,
    };
    console.log(newBookmark);
    giay.push(newBookmark);
    localStorage.giay = JSON.stringify(giay);
    // renderBookmark()
})
let mainForm2 = document.getElementById("main-form2");
let adidas = JSON.parse(localStorage.getItem("adidas"));
mainForm2.addEventListener("submit", function (e) {
    event.preventDefault();
    let newBookmark2 = {
        id: Math.floor(Math.random() * 100000000000000),
        name: mainForm2.name.value,
        kieu: mainForm2.kieu.value,
        gia: mainForm2.gia.value,
        thong: mainForm2.thong.value,
        img: mainForm2.img.value,
        img1: mainForm2.img1.value,
        img2: mainForm2.img2.value,
        img3: mainForm2.img3.value,
        img4: mainForm2.img4.value,
        img5: mainForm2.img5.value,
        img6: mainForm2.img6.value,
        img7: mainForm2.img7.value,
        img8: mainForm2.img8.value,
    };
    console.log(newBookmark2);
    adidas.push(newBookmark2);
    localStorage.adidas = JSON.stringify(adidas);
    // renderBookmark2()
})
let mainForm3 = document.getElementById("main-form3");
let balmain = JSON.parse(localStorage.getItem("balmain"));
mainForm3.addEventListener("submit", function (e) {
    event.preventDefault();
    let newBookmark3 = {
        id: Math.floor(Math.random() * 100000000000000),
        name: mainForm3.name.value,
        kieu: mainForm3.kieu.value,
        gia: mainForm3.gia.value,
        thong: mainForm3.thong.value,
        img: mainForm3.img.value,
        img1: mainForm3.img1.value,
        img2: mainForm3.img2.value,
        img3: mainForm3.img3.value,
        img4: mainForm3.img4.value,
        img5: mainForm3.img5.value,
        img6: mainForm3.img6.value,
        img7: mainForm3.img7.value,
        img8: mainForm3.img8.value,
    };
    console.log(newBookmark3);
    balmain.push(newBookmark3);
    localStorage.balmain = JSON.stringify(balmain);
    // renderBookmark3()
})
let mainForm4 = document.getElementById("main-form4");
let balenciaga = JSON.parse(localStorage.getItem("balenciaga"));
mainForm4.addEventListener("submit", function (e) {
    event.preventDefault();
    let newBookmark4 = {
        id: Math.floor(Math.random() * 100000000000000),
        name: mainForm4.name.value,
        kieu: mainForm4.kieu.value,
        gia: mainForm4.gia.value,
        thong: mainForm4.thong.value,
        img: mainForm4.img.value,
        img1: mainForm4.img1.value,
        img2: mainForm4.img2.value,
        img3: mainForm4.img3.value,
        img4: mainForm4.img4.value,
        img5: mainForm4.img5.value,
        img6: mainForm4.img6.value,
        img7: mainForm4.img7.value,
        img8: mainForm4.img8.value,
    };
    console.log(newBookmark4);
    balenciaga.push(newBookmark4);
    localStorage.balenciaga = JSON.stringify(balenciaga);
    // renderBookmark3()
})
let thongtins = JSON.parse(localStorage.thongtin);
let quanly = document.querySelector(".head22")
quanly.innerHTML = "";
thongtins.forEach((element) => {
    quanly.innerHTML +=
        `<tr>
            <td class="head211">${element.id}</td>
            <td class="head212">${element.email}</td>
            <td class="head213">${element.password}</td>
            <td class="head214">${element.active}</td>
            <td class="head215">
                <button class="head2151"onclick="unblock('${element.id}')">unlock</button>
                <button class="head2152">${element.block}</button>
                <button class="head2153" onclick="block('${element.id}')"> block</button>
            </td>
        </tr>`
})
let giays = JSON.parse(localStorage.giay);
let head4 = document.querySelector(".head4")
head4.innerHTML = "";
giays.forEach((element) => {
    head4.innerHTML +=
        ` <div class="head421" id="${element.id}">
        <img src="${element.img}" style="width: 100px;" alt="">
            <div class="head4211">
                <div class="head42111">
                    <h5><b>${element.name}</b></h5>
                </div>
                <div class="head42112">${element.kieu}</div>
                <div class="head42113">Size ${element.size}</div>
                <div class="head42114">$${element.gia}</div>
                <button onclick="xoangay1('${element.id}')">xoá</button>
            </div>
            <hr>
    </div>`
})
let adidass = JSON.parse(localStorage.adidas);
let head5 = document.querySelector(".head5")
head5.innerHTML = "";
adidass.forEach((element) => {
    head5.innerHTML +=
        ` <div class="head421" id="${element.id}">
        <img src="${element.img}" style="width: 100px;" alt="">
            <div class="head4211">
                <div class="head42111">
                    <h5><b>${element.name}</b></h5>
                </div>
                <div class="head42112">${element.kieu}</div>
                <div class="head42113">Size ${element.size}</div>
                <div class="head42114">$${element.gia}</div>
                <button onclick="xoangay2('${element.id}')">xoá</button>
            </div>
            <hr>
    </div>`
})
let balmains = JSON.parse(localStorage.balmain);
let head6 = document.querySelector(".head6")
head6.innerHTML = "";
balmains.forEach((element) => {
    head6.innerHTML +=
        ` <div class="head421" id="${element.id}">
        <img src="${element.img}" style="width: 100px;" alt="">
            <div class="head4211">
                <div class="head42111">
                    <h5><b>${element.name}</b></h5>
                </div>
                <div class="head42112">${element.kieu}</div>
                <div class="head42113">Size ${element.size}</div>
                <div class="head42114">$${element.gia}</div>
                <button onclick="xoangay3('${element.id}')">xoá</button>
            </div>
            <hr>
    </div>`
})
let balenciagas = JSON.parse(localStorage.balenciaga);
let head7 = document.querySelector(".head7")
head7.innerHTML = "";
balenciagas.forEach((element) => {
    head7.innerHTML +=
        ` <div class="head421" id="${element.id}">
        <img src="${element.img}" style="width: 100px;" alt="">
            <div class="head4211">
                <div class="head42111">
                    <h5><b>${element.name}</b></h5>
                </div>
                <div class="head42112">${element.kieu}</div>
                <div class="head42113">Size ${element.size}</div>
                <div class="head42114">$${element.gia}</div>
                <button onclick="xoangay4('${element.id}')">xoá</button>
            </div>
            <hr>
    </div>`
})
let datt = JSON.parse(localStorage.datt);
let lichsus = document.querySelector(".head311");
lichsus.innerHTML = "";
datt.forEach((element) => {
    lichsus.innerHTML +=
        `<div class="head31" id="${element.id}">
            <img src="${element.img}" alt="">
                <div class="head3111">
                    <div class="head31111">
                        <h5><b>${element.name}</b></h5>
                    </div>
                    <div class="head31112">${element.kieu}</div>
                    <div class="head31113">Size ${element.size}</div>
                    <div class="head31114">$${element.gia}</div>
                    <div class="head31115" id="usermail">${element.idd}</div>
                    <button class="delete-btn" id="${element.id}" onclick="xoaSanpham('${element.idd}')">hết hàng</button>
                    <button class="head35" type="submit" onclick="xuaSanpham('${element.idd}')">${element.tinhtrang}</button>
                    <button class="head34">${element.tinhtrang}</button>
                </div>
                <hr>
        </div>`
})

let usermail = document.querySelector("#usermail");
function xuaSanpham(idd) {
    console.log(idd)
    let datt = JSON.parse(localStorage.datt);
    let findUser = datt.filter(function (user) {
        console.log(user.idd)
        console.log(idd)
        if (user.idd == idd) {
            let findIndex = datt.findIndex(function (element, index) {
                return element.idd == user.idd;
            });
            datt[findIndex].tinhtrang = "đã giao hàng";
            localStorage.datt = JSON.stringify(datt);
        }
    });

}
function xoaSanpham(idd) {
    console.log(idd)
    let datt = JSON.parse(localStorage.datt);
    let findUser = datt.filter(function (user) {
        console.log(user.idd)
        console.log(idd)
        if (user.idd == idd) {
            let findIndex = datt.findIndex(function (element, index) {
                return element.idd == user.idd;
            });
            datt[findIndex].tinhtrang = "sản phẩm đã cháy hàng,thật xin lỗi vì thiếu sót này";
            localStorage.datt = JSON.stringify(datt);
        }
    });

}
function unblock(id) {
    console.log(id)
    let thongtin = JSON.parse(localStorage.thongtin);
    let findUser = thongtin.filter(function (user) {
        console.log(user.id)
        console.log(id)
        if (user.id == id) {
            let findIndex = thongtin.findIndex(function (element, index) {
                return element.id == user.id;
            });
            thongtin[findIndex].block = "unblock";
            localStorage.thongtin = JSON.stringify(thongtin);
        }
    });

}
function block(id) {
    console.log(id)
    let thongtin = JSON.parse(localStorage.thongtin);
    let findUser = thongtin.filter(function (user) {
        console.log(user.id)
        console.log(id)
        if (user.id == id) {
            let findIndex = thongtin.findIndex(function (element, index) {
                return element.id == user.id;
            });
            thongtin[findIndex].block = "block";
            localStorage.thongtin = JSON.stringify(thongtin);
        }
    });

}
function xoangay1(id) {
    console.log(id)
    let giay = JSON.parse(localStorage.giay);
    let findUser = giay.filter(function (user) {
        console.log(user.id)
        console.log(id)
        if (user.id == id) {
            let findIndex = giay.findIndex(function (element, index) {
                return element.id == user.id;
            });
            giay.splice(findIndex, 1)
            localStorage.giay = JSON.stringify(giay);
        }
    });

}
function xoangay2(id) {
    console.log(id)
    let adidas = JSON.parse(localStorage.adidas);
    let findUser = adidas.filter(function (user) {
        console.log(user.id)
        console.log(id)
        if (user.id == id) {
            let findIndex = adidas.findIndex(function (element, index) {
                return element.id == user.id;
            });
            adidas.splice(findIndex, 1)
            localStorage.adidas = JSON.stringify(adidas);
        }
    });

}
function xoangay3(id) {
    console.log(id)
    let balmain = JSON.parse(localStorage.balmain);
    let findUser = balmain.filter(function (user) {
        console.log(user.id)
        console.log(id)
        if (user.id == id) {
            let findIndex = balmain.findIndex(function (element, index) {
                return element.id == user.id;
            });
            balmain.splice(findIndex, 1)
            localStorage.balmain = JSON.stringify(balmain);
        }
    });

}
function xoangay4(id) {
    console.log(id)
    let balenciaga = JSON.parse(localStorage.balenciaga);
    let findUser = balenciaga.filter(function (user) {
        console.log(user.id)
        console.log(id)
        if (user.id == id) {
            let findIndex = balenciaga.findIndex(function (element, index) {
                return element.id == user.id;
            });
            balenciaga.splice(findIndex, 1)
            localStorage.balenciaga = JSON.stringify(balenciaga);
        }
    });

}



