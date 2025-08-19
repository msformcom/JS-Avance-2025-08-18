// télécharger la bibliotheque express
// Avant utilisation npm => initialiser la config => npm init
// Utiliser NPM => ligne de commande npm => npm install express
// 

// Import du module express (node version classique)

const express=require('express');
const SunCalc = require('suncalc');
// Bibliothèque écrite en js => pas de types ni d'interfaces
// npm i googlemaps
// npm i @types/googlemaps --save-dev
// @types = definitely typed
// @types/googlemaps => télécharge les interfaces (définition des types) de la 
// bibliotheque googlemaps 
// permet à l'IDE de connaitre le contenu non typé d'un fichier js
// require("googlemaps");
// google.maps.






// importer ici les éléments de la bibliothèque
// utiliser la bibliotheque

// Création de l'instance du server
const server=express();

// Premier middleware : journalisation 
server.use((req,res,next)=>{
    // Avant les traitements des middleware suivants
    console.log(`Requete entrante : ${req.path}`);
    next(); // Traitement par les autres middlewares
    console.log(`Requete finie : ${req.path}`);
});

// Mise en place d'un serveur des fichiers statiques du dossier wwwroot
server.use(express.static("wwwroot"));

// Middleware associé à l'url /toto
server.get("/toto",(req,res)=>{
    res.send("Bonjour toto");
});

// GET : /sun/info/rise/46.196356/0.660169 => Heure du lever du soleil (aujourd'hui) à l'emplacement 56.8,45.2

// Utiliser suncalc pour obtenir l'heure du lever du soleil
// A partir de cette url
server.get("/sun/info/rise/:lat/:lon",(req,res)=>{
    
    let lat=+req.params["lat"];
    let lon=+req.params["lon"];//"0.660169"
    let latOpposee=-lat;
    let lonOpposee=lon+180; // "0.660169" + 180 = 
    let infos=SunCalc.getTimes(new Date(),lat,lon);

    res.send(infos); //     res.contentType="application/json"
    
});



// Landement du server à l'écoute du port 4200
server.listen(4200,()=>{
    console.log("Server en cours d'exécution");
});