var siteName = document.getElementById("site Name");
var siteUrl = document.getElementById("site url");
var search = document.getElementById('search')
var list = JSON.parse(localStorage.getItem("siteData"));


if (localStorage.getItem("siteData") == null) {
    list = [];
}
displaySite();

function creatSite() {
    var siteInformation = {
        name: siteName.value,
        url: siteUrl.value
    }
    list.push(siteInformation);
    localStorage.setItem("siteData", JSON.stringify(list));
    displaySite()
    clear();
}

function displaySite() {
    var x = "";
    for (var i = 0; i < list.length; i++) {
        x +=
            `<div class="w-50  m-auto shadow-lg p-3  ">
            <h5>${list[i].name}<h5>
             <div class="text-center"> 
                 <a  class="btn btn-outline-primary text-center "  href="https://${list[i].url}"  target="_blank">
                 <i class="fa-solid fa-arrow-right"></i>
                 </a>
                 <button onclick="deleteSite(${i})" class="btn btn-outline-danger  text-center ">
                 <i class="fa-solid fa-trash-can"></i>
                 </button>
            </div>
        </div>`;

    }
    document.getElementById("show").innerHTML = x;
}

search.addEventListener('keyup', function () {
    var x = "";
    for (var i = 0; i < list.length; i++) {
        if (list[i].name.includes(search.value)) {
            x +=
            `<div class="w-50  m-auto shadow-lg p-3  ">
            <h5>${list[i].name}<h5>
             <div class="text-center"> 
                 <a  class="btn btn-outline-primary text-center "  href="https://${list[i].url}"  target="_blank">
                 <i class="fa-solid fa-arrow-right"></i>
                 </a>
                 <button onclick="deleteSite(${i})" class="btn btn-outline-danger  text-center ">
                 <i class="fa-solid fa-trash-can"></i>
                 </button>
            </div>
        </div>`;
        }
    }
    document.getElementById("show").innerHTML = x;
})

function clear() {
    siteName.value = "";
    siteUrl.value = "";

}

function deleteSite(indexDelet) {
    list.splice(indexDelet, 1);
    displaySite()
    localStorage.setItem("siteData", JSON.stringify(list));

}

