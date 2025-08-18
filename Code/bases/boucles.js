// Compatible tous navigateurs
var tab2=new Array();
tab2[4]=4;
for(let e in tab2){
    console.log(e);
}


// const => compatibilite ?
//Ne peut être modifié par la suite
const tab=[1,2,5,7,9];
tab.push(5);
//tab=[1];

// Compatibilité ?
let tab3=new Array();

var i=8;


for(let i=0;i<tab.length;i++){
    let e=tab[i];

}

// Boucle sur les éléments du tableau
for(let e of tab){
    console.log(e);
}

// Affiche les propriétés du tableau
for(let e in tab){
    console.log(e);
}

var o1={a:1,b:2};

for(let e in o1){
    console.log(e);
}




