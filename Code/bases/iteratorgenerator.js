let tab=[];
for(let i=0;i<10000;i++){
    tab.push(i);
}

let tabPair=tab.filter(e=>e%2==0);



// function entiersPairs(){
//     return [0,2,4];
// }

// generator => genère des élements
function* entiers(){
    // yield 0;
    //     yield 2;
    //         yield 4;
    let i=0;
    while(true){
        yield i;
        i+=1;
    }
}

function* entiersPairs(){
    for(let e of entiers()){
        if(e%2==0){
            yield e;
        }
    }
}

function* where(generateur,f){
    for(let e of generateur){
        if(f(e)){
            yield e;
        }
    }
}

for(let e of where(entiers(),e=>e%3==0)){
    console.log(e);
    if(e>100){
        break;
    }
    console.log(e);
}

// // iterator => lecture
// for(let e of entiersPairs()){
//     console.log(e);
// }

function getFacture(numero){
    return ({
        numero:numero,
        montant: Math.random()*1000
    })
}

function* factures(){
    let i=0;
    while(true){
        yield  getFacture(0)
        i++;
    }
}

for(let f of factures()){

}