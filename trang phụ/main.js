
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let giays = JSON.parse(localStorage.giay);
let adidass = JSON.parse(localStorage.adidas);
let balmains = JSON.parse(localStorage.balmain);
let balenciagas = JSON.parse(localStorage.balenciaga);
let url = window.location.href;
console.log(url)
id = url.split("=")[1];
let giay = giays.filter((e) => {
    return e.id == id;
});
currentUser.forEach((event) => {
    console.log(event.id)
})
let postContainers = document.querySelector(".nike");
postContainers.innerHTML = "";
giay.forEach((element) => {
    currentUser.forEach((eventt) => {
        postContainers.innerHTML =
            `
            <div class="head3">
            <div class="add111">
    
                <div class="add1">
                    <div class="add11">
                        <img src="${element.img1}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img2}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img3}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img4}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img5}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img6}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img7}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img8}" alt="">
                    </div>
                </div>
                <div class="add">
                    <img src="${element.img}" alt="">
                </div>
                <div class="head4">
                    <div class="head41">
                        <h2 class="card-name">${element.name}</h2>
                    </div>
                    <div class="head42 card-kieu">${element.kieu}</div>
                    <div class="head42 card-gia">$${element.gia}~</div>
                    <div class="head42" style="margin: 10px 0 10px 0;">Select Size</div>
                    <div class="head43">
                        <div class="head431">
                            <button class="head4311">EU 38,5</button>
                            <button class="head4312" size="38,5" price="120">$120</button>
                            <button class="head4313">EU 38,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 39</button>
                            <button class="head4312" size="39" price="120">$120</button>
                            <button class="head4313">EU 39</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 40</button>
                            <button class="head4312" size="40" price="120">$120</button>
                            <button class="head4313">EU 40</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 40,5</button>
                            <button class="head4312" size="40,5" price="120">$120</button>
                            <button class="head4313">EU 40,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 41</button>
                            <button class="head4312" size="41" price="120">$120</button>
                            <button class="head4313">EU 41</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 42</button>
                            <button class="head4312" size="42" price="120">$120</button>
                            <button class="head4313">EU 42</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 42,5</button>
                            <button class="head4312" size="42,5" price="120">$120</button>
                            <button class="head4313">EU 42,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 43</button>
                            <button class="head4312" size="43" price="130">$130</button>
                            <button class="head4313">EU 43</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 44</button>
                            <button class="head4312" size="44" price="160">$160</button>
                            <button class="head4313">EU 44</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 44,5</button>
                            <button class="head4312" size="44,5" price="140">$140</button>
                            <button class="head4313">EU 44,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 45</button>
                            <button class="head4312" size="45" price="130">$130</button>
                            <button class="head4313">EU 45</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 45,5</button>
                            <button class="head4312" size="45,5" price="120">$120</button>
                            <button class="head4313">EU 45,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 46</button>
                            <button class="head4312" size="46" price="150">$150</button>
                            <button class="head4313">EU 46</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 47</button>
                            <button class="head4312" size="47" price="130">$130</button>
                            <button class="head4313">EU 47</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 47,5</button>
                            <button class="head4312" size="47,5" price="140">$140</button>
                            <button class="head4313">EU 47,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 48,5</button>
                            <button class="head4312" size="48,5" price="160">$160</button>
                            <button class="head4313">EU 48,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 49,5</button>
                            <button class="head4312" size="49,5" price="130">$130</button>
                            <button class="head4313">EU 49,5</button>
                        </div>
                        <div class="head44">
                            <button type="button" id="head442" class="btn btn-primary head442"
                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add to Bag
                            </button>
    
    
                            <div class="modal fade" id="exampleModal" tabindex="-1"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                                <i class="bi bi-check-circle-fill" style="color: #007D48;"></i>
                                                Added to Bag
                                            </h1>
                                        </div>
                                        <div class="modal-body">
                                            <div class="giohang22">
                                                <img src="${element.img}" alt="">
                                                <div class="giohang220">
                                                    <div class="giohang221">${element.name}</div>
                                                    <div class="giohang222">${element.kieu}</div>
                                                    <div class="giohang223"></div>
                                                    <div class="giohang224">$${element.gia}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer" style="display: flex;">
                                            <button style=" width: 45%; background-color: white; color: pink;"
                                                type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                                <button style=" width: 45%; background-color: pink; " type="button" class="btn btn-primary"><a href="/giỏ hàng/giohang.html">Save changes</a> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="tim" style="background-color: white; color: pink;">Favourite <i
                                    class="bi bi-suit-heart "></i></button>
                            <button class="timtim" style="background-color: white; color: pink;">Favourite <i
                                    class="bi bi-suit-heart-fill"></i></button>
                            <div class="head441">${element.thong}</div>
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
        <div class="head5">
            <div class="head51">
                <img src="../img2/detaildunk.webp" alt="">
            </div>
            <div class="head52">
                <div class="head521">
                    <h2 style="color: pink;">True To Your Crew</h2>
                </div>
                <div class="head521" style="color: pink;">Your crew isn't just the people you see every day. It also
                    includes the folx you
                    connect with in your feed and IRL— the real ones who share your same weird, wonderful
                    obsessions, no
                    matter how strange they may seem. Because the Dunk has always celebrated individuality. From the
                    university basketball players (and their fans) who wore it in the 80s to the skateboarders who
                    popularised it again in the 2000s, the Dunk has always been the connective tissue for crews with
                    passions ranging from sport to everything beyond it. The Dunk celebrates the crew and what's
                    true to
                    you.</div>
            </div>
        </div>`
        let mainForm2 = document.getElementById("head442");
        let chuatt = JSON.parse(localStorage.getItem("chuatt"));
        mainForm2.addEventListener("click", function (e) {
            event.preventDefault();
            let newBookmark2 = {
                idd: Math.floor(Math.random() * 100000000000000),
                id: eventt.id,
                name: element.name,
                kieu: element.kieu,
                gia: element.gia,
                img: element.img,
                size: post2[length],
                tinhtrang: "Đang chờ lấy hàng"
            };
            console.log(newBookmark2);
            chuatt.push(newBookmark2);
            localStorage.chuatt = JSON.stringify(chuatt);
            console.log(chuatt)
            // renderBookmark2()
        })
    })

});




let adidas = adidass.filter((e) => {
    return e.id == id;
});
let postContainers2 = document.querySelector(".adidas");
postContainers2.innerHTML = "";
adidas.forEach((element) => {
    currentUser.forEach((eventt) => {
        postContainers2.innerHTML =
            `
        <div class="head3">
            <div class="add111">

                <div class="add1">
                    <div class="add11">
                        <img src="${element.img1}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img2}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img3}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img4}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img5}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img6}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img7}" alt="">
                    </div>
                    <div class="add11">
                        <img src="${element.img8}" alt="">
                    </div>
                </div>
                <div class="add">
                    <img src="${element.img}" alt="">
                </div>
                <div class="head4">
                    <div class="head41">
                        <h2 class="card-name">${element.name}</h2>
                    </div>
                    <div class="head42 card-kieu">${element.kieu}</div>
                    <div class="head42 card-gia">$${element.gia}~</div>
                    <div class="head42" style="margin: 10px 0 10px 0;">Select Size</div>
                    <div class="head43">
                        <div class="head431">
                            <button class="head4311">EU 38,5</button>
                            <button class="head4312" size="38,5" price="120">$120</button>
                            <button class="head4313">EU 38,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 39</button>
                            <button class="head4312" size="39" price="120">$120</button>
                            <button class="head4313">EU 39</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 40</button>
                            <button class="head4312" size="40" price="120">$120</button>
                            <button class="head4313">EU 40</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 40,5</button>
                            <button class="head4312" size="40,5" price="120">$120</button>
                            <button class="head4313">EU 40,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 41</button>
                            <button class="head4312" size="41" price="120">$120</button>
                            <button class="head4313">EU 41</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 42</button>
                            <button class="head4312" size="42" price="120">$120</button>
                            <button class="head4313">EU 42</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 42,5</button>
                            <button class="head4312" size="42,5" price="120">$120</button>
                            <button class="head4313">EU 42,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 43</button>
                            <button class="head4312" size="43" price="130">$130</button>
                            <button class="head4313">EU 43</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 44</button>
                            <button class="head4312" size="44" price="160">$160</button>
                            <button class="head4313">EU 44</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 44,5</button>
                            <button class="head4312" size="44,5" price="140">$140</button>
                            <button class="head4313">EU 44,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 45</button>
                            <button class="head4312" size="45" price="130">$130</button>
                            <button class="head4313">EU 45</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 45,5</button>
                            <button class="head4312" size="45,5" price="120">$120</button>
                            <button class="head4313">EU 45,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 46</button>
                            <button class="head4312" size="46" price="150">$150</button>
                            <button class="head4313">EU 46</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 47</button>
                            <button class="head4312" size="47" price="130">$130</button>
                            <button class="head4313">EU 47</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 47,5</button>
                            <button class="head4312" size="47,5" price="140">$140</button>
                            <button class="head4313">EU 47,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 48,5</button>
                            <button class="head4312" size="48,5" price="160">$160</button>
                            <button class="head4313">EU 48,5</button>
                        </div>
                        <div class="head431">
                            <button class="head4311">EU 49,5</button>
                            <button class="head4312" size="49,5" price="130">$130</button>
                            <button class="head4313">EU 49,5</button>
                        </div>
                        <div class="head44">
                            <button type="button" id="head442" class="btn btn-primary head442" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                Add to Bag
                            </button>


                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                                <i class="bi bi-check-circle-fill" style="color: #007D48;"></i>
                                                Added to Bag
                                            </h1>
                                        </div>
                                        <div class="modal-body">
                                            <div class="giohang22">
                                                <img src="${element.img}" alt="">
                                                <div class="giohang220">
                                                    <div class="giohang221">${element.name}</div>
                                                    <div class="giohang222">${element.kieu}</div>
                                                    <div class="giohang223"></div>
                                                    <div class="giohang224">$${element.gia}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer" style="display: flex;">
                                            <button style=" width: 45%; background-color: white; color: pink;"
                                                type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                                <button style=" width: 45%; background-color: pink; " type="button" class="btn btn-primary"><a href="/giỏ hàng/giohang.html">Save changes</a> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="tim" style="background-color: white; color: pink;">Favourite <i
                                    class="bi bi-suit-heart "></i></button>
                            <button class="timtim" style="background-color: white; color: pink;">Favourite <i
                                    class="bi bi-suit-heart-fill"></i></button>
                            <div class="head441">${element.thong}</div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
        <div class="head5">
            <div class="head51">
                <img src="https://cdn.snkrdunk.com/uploads/media/20221021095640-0.jpeg" alt="">
            </div>
            <div class="head52">
                <div class="head521">
                    <h2 style="color: pink;">True To Your Crew</h2>
                </div>
                <div class="head521" style="color: pink;"> The Adizero Boston 11 is designed to give you a race
                    feeling
                    on your training runs, with high performance tech combined inside a durable shoe frame.</div>
            </div>
        </div>`
        let mainForm2 = document.getElementById("head442");
        let chuatt = JSON.parse(localStorage.getItem("chuatt"));
        mainForm2.addEventListener("click", function (e) {
            event.preventDefault();
            let newBookmark2 = {
                idd: Math.floor(Math.random() * 100000000000000),
                id: eventt.id,
                name: element.name,
                kieu: element.kieu,
                gia: element.gia,
                img: element.img,
                size: post2[length],
                tinhtrang: "Đang chờ lấy hàng"
            };
            console.log(newBookmark2);
            chuatt.push(newBookmark2);
            localStorage.chuatt = JSON.stringify(chuatt);
            console.log(chuatt)
            // renderBookmark2()
        })
    })
});



let balmain = balmains.filter((e) => {
    return e.id == id;
});
let postContainers3 = document.querySelector(".balmain");
postContainers3.innerHTML = "";
balmain.forEach((element) => {
    currentUser.forEach((eventt) => {
        postContainers3.innerHTML =
            `
        <div class="head3">
        <div class="add111">

            <div class="add1">
                <div class="add11">
                    <img src="${element.img1}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img2}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img3}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img4}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img5}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img6}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img7}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img8}" alt="">
                </div>
            </div>
            <div class="add">
                <img src="${element.img}" alt="">
            </div>
            <div class="head4">
                <div class="head41">
                    <h2 class="card-name">${element.name}</h2>
                </div>
                <div class="head42 card-kieu">${element.kieu}</div>
                <div class="head42 card-gia">$${element.gia}~</div>
                <div class="head42" style="margin: 10px 0 10px 0;">Select Size</div>
                <div class="head43">
                    <div class="head431">
                        <button class="head4311">EU 38,5</button>
                        <button class="head4312" size="38,5" price="120">$120</button>
                        <button class="head4313">EU 38,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 39</button>
                        <button class="head4312" size="39" price="120">$120</button>
                        <button class="head4313">EU 39</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 40</button>
                        <button class="head4312" size="40" price="120">$120</button>
                        <button class="head4313">EU 40</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 40,5</button>
                        <button class="head4312" size="40,5" price="120">$120</button>
                        <button class="head4313">EU 40,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 41</button>
                        <button class="head4312" size="41" price="120">$120</button>
                        <button class="head4313">EU 41</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 42</button>
                        <button class="head4312" size="42" price="120">$120</button>
                        <button class="head4313">EU 42</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 42,5</button>
                        <button class="head4312" size="42,5" price="120">$120</button>
                        <button class="head4313">EU 42,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 43</button>
                        <button class="head4312" size="43" price="130">$130</button>
                        <button class="head4313">EU 43</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 44</button>
                        <button class="head4312" size="44" price="160">$160</button>
                        <button class="head4313">EU 44</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 44,5</button>
                        <button class="head4312" size="44,5" price="140">$140</button>
                        <button class="head4313">EU 44,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 45</button>
                        <button class="head4312" size="45" price="130">$130</button>
                        <button class="head4313">EU 45</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 45,5</button>
                        <button class="head4312" size="45,5" price="120">$120</button>
                        <button class="head4313">EU 45,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 46</button>
                        <button class="head4312" size="46" price="150">$150</button>
                        <button class="head4313">EU 46</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 47</button>
                        <button class="head4312" size="47" price="130">$130</button>
                        <button class="head4313">EU 47</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 47,5</button>
                        <button class="head4312" size="47,5" price="140">$140</button>
                        <button class="head4313">EU 47,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 48,5</button>
                        <button class="head4312" size="48,5" price="160">$160</button>
                        <button class="head4313">EU 48,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 49,5</button>
                        <button class="head4312" size="49,5" price="130">$130</button>
                        <button class="head4313">EU 49,5</button>
                    </div>
                    <div class="head44">
                        <button type="button" id="head442" class="btn btn-primary head442"
                            data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add to Bag
                        </button>


                        <div class="modal fade" id="exampleModal" tabindex="-1"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                                            <i class="bi bi-check-circle-fill" style="color: #007D48;"></i>
                                            Added to Bag
                                        </h1>
                                    </div>
                                    <div class="modal-body">
                                        <div class="giohang22">
                                            <img src="${element.img}" alt="">
                                            <div class="giohang220">
                                                <div class="giohang221">${element.name}</div>
                                                <div class="giohang222">${element.kieu}</div>
                                                <div class="giohang223"></div>
                                                <div class="giohang224">$${element.gia}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer" style="display: flex;">
                                        <button style=" width: 45%; background-color: white; color: pink;"
                                            type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                            <button style=" width: 45%; background-color: pink; " type="button" class="btn btn-primary"><a href="/giỏ hàng/giohang.html">Save changes</a> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="tim" style="background-color: white; color: pink;">Favourite <i
                                class="bi bi-suit-heart "></i></button>
                        <button class="timtim" style="background-color: white; color: pink;">Favourite <i
                                class="bi bi-suit-heart-fill"></i></button>
                        <div class="head441">${element.thong}</div>
                    </div>

                </div>

            </div>

        </div>

    </div>
    <div class="head5">
        <div class="head51">
            <img src="https://media.balmain.com/image/upload/q_auto,f_auto/static-library/Library-Sites-balmain-contentlibrary/default/dwbefffe9e/hp/Carrousel/PF23/hp_PF23_ESSENTIALS_men_mono_desk.jpg?sw=1440&q=90" alt="">
        </div>
        <div class="head52">
            <div class="head521">
                <h2 style="color: pink;">True To Your Crew</h2>
            </div>
            <div class="head521" style="color: pink;"> The Adizero Boston 11 is designed to give you a race
            feeling
            on your training runs, with high performance tech combined inside a durable shoe frame.</div>
        </div>
    </div>`
        let mainForm2 = document.getElementById("head442");
        let chuatt = JSON.parse(localStorage.getItem("chuatt"));
        mainForm2.addEventListener("click", function (e) {
            event.preventDefault();
            let newBookmark2 = {
                idd: Math.floor(Math.random() * 100000000000000),
                id: eventt.id,
                name: element.name,
                kieu: element.kieu,
                gia: element.gia,
                img: element.img,
                size: post2[length],
                tinhtrang: "Đang chờ lấy hàng"
            };
            console.log(newBookmark2);
            chuatt.push(newBookmark2);
            localStorage.chuatt = JSON.stringify(chuatt);
            console.log(chuatt)
            // renderBookmark2()
        })
    })
});



let balenciaga = balenciagas.filter((e) => {
    return e.id == id;
});
let postContainers4 = document.querySelector(".balenciaga");
postContainers4.innerHTML = "";
balenciaga.forEach((element) => {
    currentUser.forEach((eventt) => {
        postContainers4.innerHTML =
            `
        <div class="head3">
        <div class="add111">

            <div class="add1">
                <div class="add11">
                    <img src="${element.img1}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img2}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img3}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img4}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img5}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img6}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img7}" alt="">
                </div>
                <div class="add11">
                    <img src="${element.img8}" alt="">
                </div>
            </div>
            <div class="add">
                <img src="${element.img}" alt="">
            </div>
            <div class="head4">
                <div class="head41">
                    <h2 class="card-name">${element.name}</h2>
                </div>
                <div class="head42 card-kieu">${element.kieu}</div>
                <div class="head42 card-gia">$${element.gia}~</div>
                <div class="head42" style="margin: 10px 0 10px 0;">Select Size</div>
                <div class="head43">
                    <div class="head431">
                        <button class="head4311">EU 38,5</button>
                        <button class="head4312" size="38,5" price="120">$120</button>
                        <button class="head4313">EU 38,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 39</button>
                        <button class="head4312" size="39" price="120">$120</button>
                        <button class="head4313">EU 39</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 40</button>
                        <button class="head4312" size="40" price="120">$120</button>
                        <button class="head4313">EU 40</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 40,5</button>
                        <button class="head4312" size="40,5" price="120">$120</button>
                        <button class="head4313">EU 40,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 41</button>
                        <button class="head4312" size="41" price="120">$120</button>
                        <button class="head4313">EU 41</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 42</button>
                        <button class="head4312" size="42" price="120">$120</button>
                        <button class="head4313">EU 42</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 42,5</button>
                        <button class="head4312" size="42,5" price="120">$120</button>
                        <button class="head4313">EU 42,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 43</button>
                        <button class="head4312" size="43" price="130">$130</button>
                        <button class="head4313">EU 43</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 44</button>
                        <button class="head4312" size="44" price="160">$160</button>
                        <button class="head4313">EU 44</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 44,5</button>
                        <button class="head4312" size="44,5" price="140">$140</button>
                        <button class="head4313">EU 44,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 45</button>
                        <button class="head4312" size="45" price="130">$130</button>
                        <button class="head4313">EU 45</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 45,5</button>
                        <button class="head4312" size="45,5" price="120">$120</button>
                        <button class="head4313">EU 45,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 46</button>
                        <button class="head4312" size="46" price="150">$150</button>
                        <button class="head4313">EU 46</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 47</button>
                        <button class="head4312" size="47" price="130">$130</button>
                        <button class="head4313">EU 47</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 47,5</button>
                        <button class="head4312" size="47,5" price="140">$140</button>
                        <button class="head4313">EU 47,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 48,5</button>
                        <button class="head4312" size="48,5" price="160">$160</button>
                        <button class="head4313">EU 48,5</button>
                    </div>
                    <div class="head431">
                        <button class="head4311">EU 49,5</button>
                        <button class="head4312" size="49,5" price="130">$130</button>
                        <button class="head4313">EU 49,5</button>
                    </div>
                    <div class="head44">
                        <button type="button" id="head442" class="btn btn-primary head442"
                            data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add to Bag
                        </button>


                        <div class="modal fade" id="exampleModal" tabindex="-1"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                                            <i class="bi bi-check-circle-fill" style="color: #007D48;"></i>
                                            Added to Bag
                                        </h1>
                                    </div>
                                    <div class="modal-body">
                                        <div class="giohang22">
                                            <img src="${element.img}" alt="">
                                            <div class="giohang220">
                                                <div class="giohang221">${element.name}</div>
                                                <div class="giohang222">${element.kieu}</div>
                                                <div class="giohang223"></div>
                                                <div class="giohang224">$${element.gia}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer" style="display: flex;">
                                        <button style=" width: 45%; background-color: white; color: pink;"
                                            type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                            <button style=" width: 45%; background-color: pink; " type="button" class="btn btn-primary"><a href="/giỏ hàng/giohang.html">Save changes</a> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="tim" style="background-color: white; color: pink;">Favourite <i
                                class="bi bi-suit-heart "></i></button>
                        <button class="timtim" style="background-color: white; color: pink;">Favourite <i
                                class="bi bi-suit-heart-fill"></i></button>
                        <div class="head441">${element.thong}</div>
                    </div>

                </div>

            </div>

        </div>

    </div>
    <div class="head5">
        <div class="head51">
            <img src="https://media.balmain.com/image/upload/q_auto,f_auto/static-library/Library-Sites-balmain-contentlibrary/default/dwbefffe9e/hp/Carrousel/PF23/hp_PF23_ESSENTIALS_men_mono_desk.jpg?sw=1440&q=90" alt="">
        </div>
        <div class="head52">
            <div class="head521">
                <h2 style="color: pink;">True To Your Crew</h2>
            </div>
            <div class="head521" style="color: pink;"> The Adizero Boston 11 is designed to give you a race
            feeling
            on your training runs, with high performance tech combined inside a durable shoe frame.</div>
        </div>
    </div>`
        let mainForm2 = document.getElementById("head442");
        let chuatt = JSON.parse(localStorage.getItem("chuatt"));
        mainForm2.addEventListener("click", function (e) {
            event.preventDefault();
            let newBookmark2 = {
                idd: Math.floor(Math.random() * 100000000000000),
                id: eventt.id,
                name: element.name,
                kieu: element.kieu,
                gia: element.gia,
                img: element.img,
                size: post2[length],
                tinhtrang: "Đang chờ lấy hàng"
            };
            console.log(newBookmark2);
            chuatt.push(newBookmark2);
            localStorage.chuatt = JSON.stringify(chuatt);
            console.log(chuatt)
            // renderBookmark2()
        })
    })
});
const divadd = document.querySelector('.add img');
const divadd11 = document.querySelector('.add11');
const divadd1 = document.querySelectorAll('.add11 img');
for (let i = 0; i < divadd1.length; i++) {
    const divadd1Click = divadd1[i]
    divadd1Click.addEventListener(
        "mouseenter",
        function (event) {
            const clicked = event.target;
            const src = clicked.getAttribute('src');
            divadd.setAttribute('src', src)
        }
    )
}
const tim = document.querySelector(".tim");
const timtim = document.querySelector(".timtim");
const head43 = document.querySelector(".head43");
const head431 = document.querySelector(".head431");
const head4311 = document.querySelector(".head4311");
const head4312 = document.querySelectorAll(".head4312");
const head4313 = document.querySelectorAll(".head4313");
const head4 = document.querySelectorAll(".head4");
const btnBtnPrimary = document.querySelectorAll(".btn btn-primary");
const head44 = document.querySelectorAll(".head44");
const head442 = document.getElementById("head442");
const giohang2 = document.querySelectorAll(".giohang2");
tim.addEventListener(
    'click',
    function () {
        timtim.style.display = 'block';
        tim.style.display = 'none';
    }
)
timtim.addEventListener(
    'click',
    function () {
        tim.style.display = 'block';
        timtim.style.display = 'none';
    }
);

let postContainer = document.querySelectorAll(".head4312");
postContainer.innerHTML = [];
let post2 = [];

for (let i = 0; i < head4312.length; i++) {
    head4312[i].addEventListener(
        'click',
        function () {
            head4313[i].style.display = 'block';
            for (let n = 0; n < i; n++) {
                head4313[n].style.display = 'none';
                for (let n = head4312.length - 1; n > i; n--) {
                    head4313[n].style.display = 'none';
                    for (let i = 0; i < head4313.length; i++) {
                        head4313[i].addEventListener(
                            'click',
                            function () {
                                head4313[i].style.display = 'none';
                            }
                        )
                    }
                };
            }
            var div2 = head4312[i].getAttribute("size");
            post2.unshift(div2)
            console.log(post2)
        },
    )
}
// let bookmarks = JSON.parse(localStorage.getItem("giay"));
head44.innerHTML = "";
for (let i = 0; i < head4312.length; i++) {
    head442.addEventListener(
        'click',
        function () {
            head4313[i].style.display = 'none';
            let cardTitle = document.querySelector(".giohang223");
            cardTitle.innerHTML = post2[length];
            console.log(cardTitle.innerHTML)
        }
    )
}











let logOut = document.querySelector(".logOut");
let userName = document.querySelector(".userName");

currentUser = currentUser[0].email;
userName.innerHTML = currentUser;

logOut.addEventListener("click", function () {
    currentUser = [];
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    giohang = [];
    window.location.href = "http://127.0.0.1:5501/trang%20ch%E1%BB%A7/index.html";

});






































