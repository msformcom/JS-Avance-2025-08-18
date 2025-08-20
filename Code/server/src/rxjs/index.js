import { fromEvent, throttleTime,map, bufferCount, timer, Subject, switchMap } from "https://esm.sh/rxjs@7.8.1"; 
document.addEventListener("DOMContentLoaded", 
    () => { 
        var surface = document.querySelector("#surface"); 
        var gestionEvent= fromEvent(surface, "mousemove")
        .pipe(throttleTime(100))
        .pipe(map(e=>({x:e.clientX,y:e.clientY,date:Date.now()})))
        .pipe(bufferCount(2,1))
        .pipe(map(tab=>{
            let [before,after]=tab;
            let d=Math.sqrt(Math.pow(before.x-after.x,2)+Math.pow(before.y-after.y,2));
            let v=d/(after.date-before.date);
            return v;
        }))
        .subscribe(e => { 
            //console.log(e) ;
            surface.innerHTML=e;
        });

        let t=timer(0,1000);
        t.subscribe(e => { 
            console.log(e) ;
        });

        // Subject => Observable dont on founri les valeurs de sortie avec sa méthode next
        let subject=new Subject();

        subject.subscribe(e => { 
            console.log(e) ;
        });
    
        subject.next(56);

        // t.pipe(switchMap(subject)).subscribe(e=>{
        //     console.log("Fusion timer et subject");
        // });

    
});