var o=0;


// o est truthy => not falsy
// o est falsy => 0, "",undefined, null, NaN, false
if(o){
    console.log("Ok");
}

let moi={
    nom:"Mauras"
}

// moi n'a pas de frère
moi.frere=null;

// On a pas l'info
moi.frere=undefined