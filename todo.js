const toDoform = document.querySelector(".js-toDoForm"),
toDoInput = toDoform.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS=`toDOS`;

function paintToDo(text){
    const li=document.createElement("li");              //비어있는 li 생성
    const delBtn = document.createElement("button");    //버튼생성
    delBtn.innerHTML="❌";                              //버튼셋팅
    const span=document.createElement("span");
    span.innerText=text;
    li.appendChild(delBtn);
    li.appendChild(span);                              //만든 li에 버튼 추가
    toDoList.appendChild(li);                           //toDoList에 li추가
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const toDos=localStorage.getItem(TODOS_LS);
    if(toDos===null){

    }
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit)
}

init();