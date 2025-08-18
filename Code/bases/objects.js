var o1={a:1,b:2};



// expando => on peut ajouter à un object des membres nouveau
o1.toto="coucou";

// Enlever toto
delete o1.toto;

for(let e in o1){
    console.log(e);
}
