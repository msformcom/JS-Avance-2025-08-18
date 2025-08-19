async function operationLongue(a,b){
    // ici la fonction constructrice de promise
    // est terminée au bout de 1ms
    new Promise((resolve,reject)=>{
        setTimeout(() => {
          
            console.log("Operation terminée");
               resolve(a+b);
        }, 5000);
       
    });
}
 function addition(a,b){

        let r=0;
        for(let i=0;i<a;i++){
            r++;
        }
        for(let i=0;i<b;i++){
            r++;
        }
        console.log("Addition terminée");
        return r;

};

async function additionAsync(a,b){
    // on ne sortira pas de cette fonction sans avoir terminé la construction de l'objet promise
    // il faut aller au bout de la fonction passée au constructetur
    new Promise((resolve,reject)=>{
        let r=0;
        for(let i=0;i<a;i++){
            r++;
        }
        for(let i=0;i<b;i++){
            r++;
        }
        console.log("Addition terminée");
        resolve(r);
    });
}

// Batch prioncipal lancé 
// l'interpréteur js ne sortira pas de l'éxécution avant la fin de code
console.log("Debut");
setTimeout(()=>{
    // Batch 2 => ajouté à la pile d'éxécution dans 100ms
    addition(4000000000,10000000);
    console.log("Fin timeout");
},100);
setTimeout(()=>{
    // Batch 2 => ajouté à la pile d'éxécution dans 100ms
    console.log("Fin timeout");
},102);


additionAsync(4000000000,10000000);

console.log("Fin");