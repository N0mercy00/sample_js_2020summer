const form=document.querySelector(".js-form"),
    input =form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
const USER_LS="currentUser",
    SHOWING_CN="showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);                 //로컬저장소에 저장
}

function handleSubmit(event){                            //현재 input에 들어있는 값 체크
    event.preventDefault();
    const currentValue = input.value;               
    paintGreeting(currentValue);                         //그 값으로 paintGreeting
    saveName(currentValue);                                         //혹은 저장
}

function askForName(){                                              
    form.classList.add(SHOWING_CN);                      //form 추가
    form.addEventListener("submit",handleSubmit);        //제출시 handleSubmit함수
}

function paintGreeting(text){                            //form 지우고 greeting 추가하고
    form.classList.remove(SHOWING_CN);                   //hello + username
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello ${text}`;
}

function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();     
                                      //로컬에 저장된 이름 없으면 askForName
    
    }else{
        paintGreeting(currentUser);                      //있으면 paintGreeting
        
    }
}

function init(){
    loadName();                                          //loadName 실행
}

init();                                                  //init 실행 주석 아래서 부터 위로 읽기