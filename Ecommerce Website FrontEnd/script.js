function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
document.getElementById('theme').addEventListener('click', toggleDarkMode);
const mainimg=document.getElementById("big_img");
const smallimg=document.getElementsByClassName("small_img")
smallimg[0].onclick=function(){
    mainimg.src=smallimg[0].src;
}
smallimg[1].onclick=function(){
    mainimg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
    mainimg.src=smallimg[2].src;
}
smallimg[3].onclick=function(){
    mainimg.src=smallimg[3].src;
}