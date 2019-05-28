
let kachok = {
name: 'Серёга',
weight: '103kg',
ant: {
    bicops: 46,
    chest:130
}
};
kachok.last_year = {
bicops: 42,
chest: 124,
legs: 42
};

/*console.log(kachok);*/
for(let i in kachok){
    console.log(kachok[i]);
    console.log(i);
    console.log(`Keys is ${i}: ${kachok[i]}`);
    if(typeof kachok[i] === 'object'){
            console.log(kachok[i]);
        if(typeof kachok[i] === 'string'){
                console.log(kachok[i]);
            } else if(typeof kachok[i] === 'number'){
                console.log(kachok[i]);
            }
        for(let j in kachok[i]){
            if(typeof kachok[i][j] === 'string'){
                console.log(kachok[i][j]);
            } else if(typeof kachok[i][j] === 'number'){
                console.log(kachok[i][j]);
            } 
            
            
        }
    } 
}
//Калькулятор
function calc() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
        a + b;
    
    
    }
    function equally() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c=a+b;
    document.getElementById('result').innerHTML =  c;
    }
    