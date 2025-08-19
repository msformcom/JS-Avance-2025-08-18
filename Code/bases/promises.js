// Opération asynchrone = fonction qui va donner un résultat mais pas immédiatement
// il ne faut pas bloquer le traitement

// function calculAsyncCallback(a, success, error) {
//     // 5s
//     success(5);

//     // si error 
//     error(new Error("Erreur de traitement"))
// }

// l'interpréteur bloqué sur l'opération pendant l'exécution de la fonction
// calculAsyncCallback(2, () => {

// },
//     () => { }

// );

// le retour de cette function est une promesse
// résolue ou rejetée
// la gestion des callback est faite par la promesse
function calculAsyncPromise(a) {
    // return Promise.resolve(5);
    // // ou 
    // return Promise.reject(new Error("Problème"));
    return new Promise((resolve, reject) => {
        // exécuter le code asynchrone
        setTimeout(() => {
            resolve(5);
            // ou reject(new Error("Problème"));
        }, 5000);
    })
}

// let p=calculAsyncPromise(4);
// p.then(r=>{
//     console.log("Callback1 : "+r);
// });
// p.then(r=>{
//     console.log("Callback2 : "+ r);
// });
// p.catch(err=>{
//     console.log(err);
// });

// // Nouvelle promesse avec le résultat de la première transformé
// p.then(r=>r*2)
// // Fin de la transformation
// .then(rFois2=>{
//     console.log("Callback3 : "+rFois2);
// })

console.log("Avant lancement de p1");
let p1 = calculAsyncPromise(4);


p1.then(r => {
    console.log("Resultat p1 : " + r);
    console.log("Avant lancement de p2");
    let p2 = calculAsyncPromise(r);
    p2.then(r => {
        console.log("Resultat p2 : " + r);
    })
});


console.log("Après lancement des opérations");

// Async /await
console.log("Async await");
(async function () {
    let r1 = await calculAsyncPromise(5);
    console.log("R1 : " + r1);
    let r2 = await calculAsyncPromise(r1);
    console.log("R2 : " + r2);
})();

//equivalent
console.log("then /catch");
(async function () {
    calculAsyncPromise(5).then(r1=>{
        console.log("R1 : " + r1);
        calculAsyncPromise(r1).then((r2=>{
             console.log("R2 : " + r2);
        }));
    })
})();