// promise => objet qui represente une opération asynchrone
// asynchrone => resultat qui va prendre du temps à arriver
// parrallelisme => pas forcement
// parralele si function système ou code utilisant un worker

// p est une promesse résolue avec la valeur 4
//let p=Promise.resolve(4); // le 4 va arriver un tick après la fin du batch

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(4);
//     }, 3000);
// })
// p.then(r => {
//     // ce bach est ajouté aux batchs à exécuter après les batchs courants
//     console.log(r);
// })

// console.log("Ligne suivant la promesse");

function additionAsync(a, b) {
    // fetch.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000);
    })
}

// (function(){
//     additionAsync(1,2).then(r=>{
//         console.log(`1+2=${r}`)
//         console.log("Ligne après avec attente"); // après attente
//     })
//     console.log("Ligne après sans attente"); // tout de suite
// })();

// (async function () {
//     console.log(`Début`);
//     let r = await additionAsync(1, 2)
//     console.log(`1+2=${r}`);
//     console.log("Ligne après avec attente"); // après attente


// })();

(async function () {
    console.log(`Début`);
    // let r1 = await additionAsync(1, 2);
    // // attente de r1 => r2 n'est pas lancé
    // let r2 = await additionAsync(3, 4)
    // // lancement de r2 => aurait pu être lancé plus toto

    let [r1,r2]=await  Promise.all([additionAsync(1, 2),additionAsync(3, 4)])
    console.log(await additionAsync(r1, r2));



})();

(async function () {
    let r=await additionAsync(1,2);
    console.log(r);
})();
(function () {
    additionAsync(1,2).then(r=>{
         console.log(r);
    })
})()

