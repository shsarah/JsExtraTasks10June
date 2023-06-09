const result=document.getElementById("result");
const inputVal=document.getElementById("input");
const confirmBtn=document.getElementById("button");

function checkNumber(){
    let value=inputVal.value;
    if(value%2===0){
        result.innerHTML=`${value} ededi cutdur`;
    }
    else{
        result.innerHTML=`${value} ededi tekdir`;
    }
}

function checkAge(){
    let value=inputVal.value;
    if(value>=20){
        result.innerHTML= `Yashiniz 20-den boyukdur`
    }
    else{
        result.innerHTML=`Yashiniz 20-den kichikdir`
    }
}