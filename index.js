const title = document.querySelector("#title");
const CLICKED_CLASS="clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    //toggle 함수 안에 파라매터가 있는지 체크 있으면 add 없으면 remove
}

function init(){
    title.addEventListener("click",handleClick)
}

init();

