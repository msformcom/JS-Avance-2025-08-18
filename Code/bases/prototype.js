function Personne(nom){
    this.nom=nom;
}

// création d'instance
let p=new Personne();

for(let n in p){
    console.log(n);
}

// Connaitre la classe de P
console.log(p.constructor);

if(p instanceof Personne){
    console.log("P est une personne");
}

// Ajout d'une propriété au prototype de Personne
Personne.prototype.nombreDeYeux=2;

// Quand je lis nombreDeYeux =>
// Recherche dans l'objet p => non
// Recherche dans le prototype du constructeur de p
console.log(p.nombreDeYeux);

// p a une propriété propre nombreDeYeux qui vaut 4 
p.nombreDeYeux=4;

// Quand je lis nombreDeYeux =>
// Recherche dans l'objet p => oui => 4
// Recherche dans le prototype du constructeur de p
console.log(p.nombreDeYeux);

// Héritage
function Contact(nom){
    this.nom=nom;
}

var c2=new Contact();


Contact.prototype=new Personne();

console.log(c2.nombreDeYeux);
// Quand je lis nombreDeYeux =>
// Recherche dans l'objet p => non
// Recherche dans le prototype du constructeur de p => non
// Recherche dans le prototype au dessus de Personne => oui => 2

// c2 => constructeur => prototype => Objet de type Personne => constructeur => prototype => nombre de yeux

var s="Dominique"; // Quel est le constructeur de s => String
var s2=new String("Dominique");

// Fonction ellipsis => raccourcir les string trop long
function ellipsis(s,n){
    if(s.length<=n){
        return s;
    }
    return s.substring(0,n-3)+"...";
}

//let s3=ellipsis(s2,5);


 String.prototype.ellipsis=function(n){
    if(this.length<=n){
            return this;
        }
    return this.substring(0,n-3)+"...";
 }
console.log(s2.ellipsis(5));