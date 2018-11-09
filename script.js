var btn;
window.onload = function(){
btn = document.querySelector('.btn');
btn.onclick = btnClick;
}

function btnClick(){
btn.classList.toggle('btn-active');
}