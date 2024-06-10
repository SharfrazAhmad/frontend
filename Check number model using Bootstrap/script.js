const paracount = document.getElementById('count');
let c = paracount.textContent;
function incr ()
{
    if(c>19){
        alert("Number can't be more than 20");
        
    }
    else{
        c++;
    paracount.textContent=c
    }
}
function decr ()
{
    if(c<=0){
        alert("Number can't be less than 0");
        
    }
    else{
        c--;
        paracount.textContent = c;
    }
}
function reset ()
{
    c = 0;
    document.getElementById("result").innerText="0";
    paracount.textContent=c
}
function checkNumber(){
    if(c==0){
        document.getElementById("result").innerText="0";
    }
    else if(c%2==0){
        document.getElementById("result").innerText="Even";
    }
    else{
        document.getElementById("result").innerText="Odd";
    }
}


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})