const modal = document.querySelector(".modal-container");
const btnX = document.querySelector(".x");
const btnSubmit = document.querySelector(".submit");
const btnClose = document.querySelector(".close");


btnX.addEventListener("click", clickX);
function clickX() {
    modal.style.display = "none";
}

btnSubmit.addEventListener("click", clickSubmit);
function clickSubmit() {
    const name = document.querySelector("#name").value;
    if (name === ""){
        document.querySelector("#name").style.border = "red solid";
    } else {
        modal.style.display = "none";
    }
    
}
btnClose.addEventListener("click", clickClose);
function clickClose() {
    modal.style.display = "none";
}