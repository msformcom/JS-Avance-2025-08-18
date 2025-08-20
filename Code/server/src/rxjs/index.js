
import {fromEvent} from "https://esm.sh/rxjs@7.8.1";
document.addEventListener("DOMContentLoaded",()=>{
    let surface=document.querySelector("#surface");
    // surface.addEventListener("mousemove",(e)=>{
    //     console.log(e);
    // })
    // Création d'un observable à partir de l'evénement
    fromEvent(surface,"mousemove")
    .
    // abonnement => j'exécute du code à chaque sortie
    .subscribe(e=>{
        console.log(e);
    });

});