















let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let thongtin3 = JSON.parse(localStorage.getItem("thongtin3"));
let email3 = JSON.parse(localStorage.getItem("email3"));
let mainForm = document.getElementById("main-form");
let mainForm2 = document.getElementById("main-form2");
let errorContainer = document.querySelector(".error");
let errorContainer2 = document.querySelector(".error2");
let email2 = []
let add23 = document.querySelector(".add23")
let add2 = document.querySelector(".add2")


mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let tinh = mainForm.tinh.value;
    let huyen = mainForm.huyen.value;
    let xa = mainForm.xa.value;
    let name = mainForm.name.value;
    event.preventDefault();
    let newBookmark = {
        id: currentUser[0].id,
        tinh: tinh,
        huyen: huyen,
        xa: xa,
        ten: name,
    };
    thongtin3.push(newBookmark);
    localStorage.thongtin3 = JSON.stringify(thongtin3)
    let chuatt = JSON.parse(localStorage.getItem("chuatt"));
    let datt = JSON.parse(localStorage.getItem("datt"));
    for (let i = 0; i < chuatt.length; i++) {
        let findIndex = chuatt.findIndex(function (element) {
            return currentUser[0].id == element.id;
        });
        if (findIndex >= 0) {
            datt.push(chuatt[findIndex]);
            localStorage.datt = JSON.stringify(datt);
            chuatt.splice(findIndex, 1);
            localStorage.chuatt = JSON.stringify(chuatt);
        }

    }
    window.location.href = "/trang chủ/index.html";
    alert("bạn đã thanh toán thành công , nếu địa chỉ không sai thì giày của bạn sẽ được giao trong vài hôm tới")
})
let isLogin = false
let thongtin2 = JSON.parse(localStorage.thongtin3);
function Login() {
    let useremail = document.getElementById("exampleInputEmail1").value
    let userpassword = document.getElementById("exampleInputPassword1").value
    let checkLogin = thongtin2.some(value => value.email === useremail && value.password === userpassword)
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