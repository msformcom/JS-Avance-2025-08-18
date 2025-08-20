var o1={a:1,b:2};
let o2=new Object();


// expando => on peut ajouter à un object des membres nouveau
o1.toto="coucou";

// Enlever toto
delete o1.toto;

for(let e in o1){
    console.log(e);
}


let o3={a:4,b:6};
let o4={c:4,d:5};

// Fusionner o3 et o4
let o6={};
Object.assign(o6,o3); // faire passer les propriétés de o3 dans o6
Object.assign(o6,o4);

let o5={...o3,...o4};
for(let e in o5){
    console.log(e);
}

let o={a:1,b:2,c:4,d:5};
let {d:c,c:d}=o;
console.log(c);