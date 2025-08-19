function getMyPositionAsync(){
    return new Promise((resolve,reject)=>{
        // Code de la fonction asynchrone
        let handle=setTimeout(() => {
                reject(new Error("Temps dépassé"));
        }, 5000);
        navigator.geolocation.getCurrentPosition(
            (coords)=>{
                if(handle){
                    resolve(coords);
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