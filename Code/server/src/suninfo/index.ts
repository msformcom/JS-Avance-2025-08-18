// Importation de la fonction exportée dans geoservice.js
// utilisation de la syntaxe ESM (import)
// avec node.js 
// require("geoservice.js");

import { GetTimesResult } from 'suncalc';
import {getMyPositionAsync, getSunInfosAsync} from './geoservice.js';

// suncalc.js est juste un script donc import ne fait que exécuter le script
// SunCalc sera dans l'objet global (window)
import "/node_modules/suncalc/suncalc.js";

document.addEventListener("DOMContentLoaded", () => {
    // Document chargé
    const button_get_position = document.querySelector("#button_get_position")!;
    const input_lat = document.querySelector("#input_lat") as HTMLInputElement;
    const input_lon = document.querySelector("#input_lon") as HTMLInputElement;
    const placeholder_error = document.querySelector("#placeholder_error") as HTMLDivElement;
    const placeholder_infos=document.querySelector("#placeholder_infos") as HTMLDivElement;
    let viewModel :{
        currentLat? : number,
        currentLon? : number,
        errorMessage?:string,
        infos? : GetTimesResult
    } = {

    }

    function majUI() {
        input_lat.value = viewModel.currentLat ? viewModel.currentLat.toString():"";
        input_lon.value = viewModel.currentLon ? viewModel.currentLon.toString() : "";
        placeholder_error.innerHTML = viewModel.errorMessage ?? "";
        placeholder_infos.innerHTML=JSON.stringify(viewModel.infos);
    }

    // click sur le bouton
    button_get_position.addEventListener("click", async () => {


        try {
            let coords = await getMyPositionAsync();
            viewModel.currentLat = coords.latitude;
            viewModel.currentLon = coords.longitude;
            // utiliser sunclac coté server
            // utiliser fetch pour obtenir les resultats de suncalc coté server
            // ajouter une methode getSunInfosAsync à geoservice
            // et l'utiliser ici
            viewModel.infos=await getSunInfosAsync(viewModel.currentLat,viewModel.currentLon);
            majUI();

        } catch (error) {
            viewModel.errorMessage = error.message;
            majUI();
        }




        // opération asynchrone => prend du temps
        // design pattern callback => fonctions exécutées lorsque l'opération est terminée
        // navigator.geolocation.getCurrentPosition(
        //     // callback success
        //     (infos) => {
        //         viewModel.cuurentLat = infos.coords.latitude;
        //         viewModel.currentLon = infos.coords.longitude;
        //         majUI();
        //     },
        //     // callback error
        //     (error) => {
        //         viewModel.errorMessage = error.message;
        //         majUI();
        //     }
        // )
    });
});