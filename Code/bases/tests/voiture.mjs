// modele de voiture obligatoire et non vide
// npm init -y
// npm i jasmine
// npm i jasmine -g pour la ligne de commande 
// npx jasmine init si jasmine pas installé globalement (sans -g)
// jasmine init si jasmine installé globalement (-g)
// creer des fichiers .spec.js dans le dossier spec
export class Voiture{

   constructor(modele){

        this.modele=modele;
   }

   $modele=undefined;

   get modele(){
      return this.$modele;
   }
   // Affectation du modele 
   set modele(v){
         if(!v){
            throw new error("Modele vide")
         }
         this.$modele=v;
   }
 }

