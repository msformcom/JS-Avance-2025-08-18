function addition(a,b){
    console.log(this);// globalThis
    return a+b;
}

function getName(p){
    console.log(this); // globalThis
        console.log(p); // globalThis
    return this.nom;
}

class Toto{
    nom="Toto";
    addition(a,b){
        console.log(this);
        return a+b;
    }
}

var t=new Toto();
// t.addition(1,2); // this dans la fonction => t
// addition(1,2); // this dans addition => object globalThis => navigateur window / node global
// console.log(getName());

// la fonction getName est détachée de t ou de Toto => je l'exécute comme si elle était sur Toto
console.log(getName.apply(t));

let fT=getName.bind(t,"valeur de p");
console.log(fT());


function somme(){
    let s=0;
    for(let p in arguments){
        s+=arguments[p];
    }
    console.log(arguments);
    return s;
}

function multi(...t){
    console.log("Multi");
    console.log(t);
    return t.reduce((a,b)=>a*b,1);
}

console.log(somme(1,2,3));

console.log(multi(1,2,3,4,5));