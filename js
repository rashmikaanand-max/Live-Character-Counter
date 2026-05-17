const textarea=document.getElementById('textarea');
const counter=document.querySelector('.counter');
const body = document.body;

function countingCharacter(){
  const text=textarea.value;
  const length=text.length;
  counter.textContent=length;
  
  if (length>100){
    counter.style.color="red";
  }else{
    counter.style.color="green";
  }
  if (length>200){
    body.style.backgroundColor="yellow"
  }else{
    body.style.backgroundColor="lightblue"
  }
}

textarea.addEventListener('keyup',countingCharacter);
