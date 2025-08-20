import { BehaviorSubject, bufferCount, publish} from "https://esm.sh/rxjs@7.8.1";

let button_increment = document.getElementById("button_increment");
let placeholder_counter = document.getElementById("placeholder_counter");

function update(bs,f){
    bs.next(f(bs.getValue()))
}

function majUI() {
    placeholder_counter.innerHTML = n;
}

    let n=0;
    let $n=new BehaviorSubject(0); // observable modifiable avec valeur initiale 0;

    // Changement de valeur de $n
    $n.pipe(bufferCount(2,1)).subscribe(tab=>{
        // modifs dans l'ui en cas de changements de valeur pour $n
        // MVVM de Vue, React ou Angular
        // code View
        placeholder_counter.innerHTML = `passage de ${tab[0]} à ${tab[1]}`;
    })

document.addEventListener("DOMContentLoaded", () => {
    button_increment.addEventListener("click", () => {
        // Ici, aucune référence directe à des fonctions liées à l'UI
        // MVVM de Vue, React ou Angular
        // code ViewModel
        update($n,n=>n+1);
        //$n.next($n.getValue()+1);
  
    });
});

