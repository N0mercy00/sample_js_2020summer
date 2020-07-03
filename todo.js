const toDoform = document.querySelector(".js-toDoForm"),
toDoInput = toDoform.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS=`toDos`;

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos=cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li=document.createElement("li");              //비어있는 li 생성
    const delBtn = document.createElement("button");    //버튼생성
    const newId=toDos.length+1;
    delBtn.innerHTML="❌";                              //버튼셋팅
    delBtn.addEventListener("click",deleteToDo);
    const span=document.createElement("span");
    span.innerText=text;
    li.appendChild(delBtn);
    li.appendChild(span);                              //만든 li에 버튼 추가
    li.id=newId;
    toDoList.appendChild(li);                           //toDoList에 li추가
    const toDoObj={
        text: text,
        id:newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){
        const parsedToDos=JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit)
}

init();