import { GetTimesResult } from "suncalc";

export function getMyPositionAsync() : Promise<GeolocationCoordinates>{
    return new Promise((resolve,reject)=>{
        // Code de la fonction asynchrone
        let handle : NodeJS.Timeout | undefined=setTimeout(() => {
                reject(new Error("Temps dépassé"));
        }, 5000);
        navigator.geolocation.getCurrentPosition(
            (infos)=>{
                if(handle){
                    resolve(infos.coords);
                    clearTimeout(handle);
                    handle=undefined;                    
                }

            },
            (error)=>{
                if(handle){
                    reject(error);
                    clearTimeout(handle);
                    handle=undefined;                    
                }

            }
        )
    })
}

export async function getSunInfosAsync(lat,lon) : Promise<GetTimesResult>{
    // si je le souhaite je choisis ici la manière dont je résouds les infos sun 
    // soit localement => non asynchrone => transformée en promesse
    // soit par interrogation server => implémentation est asynchrone
    //return Promise.resolve(SunCalc.getTimes(new Date(),viewModel.cuurentLat, viewModel.currentLon));


    // Url du service
    let url=`/sun/info/rise/${lat}/${lon}`;

  
    // envoi de la requète et attente de réponse du server
    let reponseServer=await fetch(url);
    
    // désérialisation à partir du json
    let infos=(await reponseServer.json()) as GetTimesResult;
    
    // retour du resultat
    return infos;
}
