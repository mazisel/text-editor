const textupbtn = document.getElementById('up');
const textdownbtn = document.getElementById('down')
const textarea = document.getElementById('textareaid')
const colors = document.getElementById('color')
const texttype = document.getElementById('texttype')


textupbtn.addEventListener("click", upsize);
textdownbtn.addEventListener("click", upsize)


function upsize() {
    alert("Şuan aktif değil")
}

function changecolor(value) {

    textarea.style.color = value;

}

function changetype(value) {
    textarea.style.textDecoration = value;
    textarea.style.fontStyle = value;
}