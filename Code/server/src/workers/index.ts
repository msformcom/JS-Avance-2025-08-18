function additionAsync(a:number,b:number):Promise<number>{
    return new Promise((resolve,reject)=>{
            // instanciation du worker
            let worker1=new Worker("./addition.js");
            // Evenement gérant un message provenant du worker
            worker1.addEventListener("message",(e)=>{
               resolve(e.data as number);
            })
            worker1.addEventListener("error",(e)=>{
               reject(e.message);
            })
            worker1.postMessage({a,b});
    });
}

document.addEventListener("DOMContentLoaded",()=>{
    let placeholder_resultat=document.querySelector("#placeholder_resultat")!;
    let button_lancer=document.querySelector("#button_lancer")!;
    button_lancer.addEventListener("click",
        async ()=>{
            // Total => 28 s
            var [r1,r2]=await Promise.all([
                                            additionAsync(5000000000,10000000),
                                            additionAsync(5000000000,10000000)
                                        ]); // 7s
            // var r1=await additionAsync(5000000000,10000000); // 7s
            // var r2=await additionAsync(5000000000,10000000); // 7s
             placeholder_resultat .innerHTML=`Le resultat de ${r1}+${r2}=` ;  
            let r3=await additionAsync(r1,r2); // 14s
            placeholder_resultat .innerHTML+=r3                  
        })
});