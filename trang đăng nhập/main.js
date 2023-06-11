let thongtin = JSON.parse(localStorage.getItem("thongtin"));
let email3 = JSON.parse(localStorage.getItem("email3"));
let mainForm = document.getElementById("main-form");
let mainForm2 = document.getElementById("main-form2");
let error = "";
let errorContainer = document.querySelector(".error");
let error2 = "";
let errorContainer2 = document.querySelector(".error2");
let email2 = []
let add23 = document.querySelector(".add23")
let add2 = document.querySelector(".add2")


mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = mainForm.email.value;
    let password = mainForm.password.value;
    let number = mainForm.number.value;
    let name = mainForm.name.value;
    console.log(password)

    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let numberRegex = /^[0-9\-\+]{9,15}$/;
    if (!passRegex.test(password)) {
        error = ""
        error += "password ko hợp lệ ";
    }
    if (!emailRegex.test(email)) {
        error = ""
        error += "email ko hợp lệ ....";
    }
    if (!numberRegex.test(number)) {
        error = ""
        error += "number ko hợp lệ ....";
    }
    if (passRegex.test(password) && emailRegex.test(email) && numberRegex.test(number)) {
        error = "";
    }
    console.log(error)
    if (error) {
        errorContainer.classList.remove("hide");
        errorContainer.innerHTML = event;
    } else {
        errorContainer.classList.add("hide");
        errorContainer.innerHTML = event;

    }
    event.preventDefault();
    let newBookmark = {
        id: Math.floor(Math.random() * 100000000000000),
        active: "offline",
        name: name,
        block: "unblock",
        number: number,
        email: email,
        password: password,
    };
    let newemail = (email)
    console.log(newBookmark);
    thongtin.push(newBookmark);

    if (email3.indexOf(email) >= 0) {
        error = ""
        error += "email đã được dùng ....";
    } else if (email3.indexOf(email) < 0) {

        email2.push(`${email}`)
        console.log(email2)
        email3.push(`${mainForm.email.value}`);
        console.log(email3)
        localStorage.thongtin = JSON.stringify(thongtin)
        localStorage.email3 = JSON.stringify(email3)
        window.location.href = "http://127.0.0.1:5501/trang%20ch%E1%BB%A7/index.html";
    }
})
let isLogin = false
let thongtin2 = JSON.parse(localStorage.thongtin);
console.log(thongtin2)
function Login() {
    let useremail = document.getElementById("exampleInputEmail1").value
    let userpassword = document.getElementById("exampleInputPassword1").value
    let checkLogin = thongtin2.some(value => value.email === useremail && value.password === userpassword)
}







