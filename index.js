let sum1 = 0;
for(let i=0; i<=10; i++){
    sum1=sum1+i;
}
console.log(sum1);


let names = ["aisha", "nimra", "muniba", "munib", "hadi", "abdullah", "ahad", "hannan", "ali", "sadia"];

for (let i=0; i< names.length; i += 2){
    console.log(names[i]);
}


function oddNumber(){
    let start = parseInt(document.getElementById("start").value);
    let end  = parseInt(document.getElementById("end").value);

    let result= "Odd numbers between "+ start + " and " + end+ " are: ";

    for(let i=start; i<=end; i++){
        if(i % 2 !== 0){
            result += i + "  ";
        }
    }

    document.getElementById("result").innerHTML= result;
}