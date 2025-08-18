// Syntaxe récente de classe et de module (syntaxe ES)
export class Voiture{
    constructor(marque){
        this.marque=marque;
    }
}

export const valeur=5;

// Syntaxe ancienne
export function Camion(marque){
    // this => instance de la classe
    this.marque=marque;
}

// Pas une classe => pas de majuscule
function menage(){

}

let c=new Camion("Peugeot");
console.log(c.marque);

