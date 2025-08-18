 
// Le code de la fonction sera exécuté lorsque les éléments de la page auront été parsés
document.addEventListener("DOMContentLoaded",()=>{
    // Avantage => je suis dans une fonction => mes variables sont locales 
    // => inaccessibles aux autres codes
    document.getElementById("span_heure").innerHTML=new Date().toISOString();

    // ViewModel = Objet qui contient les données représentées dans la vue
    let viewModel={
        score:0
    };


    document.querySelector("#button_add_score").addEventListener("click",()=>{
        viewModel.score++;
        majUI();
    });

    // Certains frameworks vont automatiquement implémenter la maj de l'UI
    function majUI(){
        let div=document.querySelector("#div_score");
        div.innerHTML="*".repeat(viewModel.score);
    }


});

