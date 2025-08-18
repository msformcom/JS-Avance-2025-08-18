// Syntaxe récente 
class Voiture{
    constructor(marque){
        this.marque=marque;
    }

}

// Syntaxe ancienne
function Camion(marque){
    // this => instance de la classe
    this.marque=marque;
}

// Pas une classe => pas de majuscule
function menage(){

}

let c=new Camion("Peugeot");
console.log(c.marque);