   // Attention : dans le global
        function a(){}
        // closure : fonction définie et exécutée aussitôt
        // pour créer un scope pour les variables
        (function(){
            // a est une variable locale => uniquement visible dans cette fonction
            let a=1;
            
            // Objet window => objet global du navigateur
            // dans node.js => global
            // globalThis => window dans le navigateur
            // globalThis => global dans node.js => très limité par rapport a window
            window.b=1;
            // Je veux la valeur de a
            setTimeout(() => {
                console.log("Valeur de a : "+a);
            }, 1000);            
        })();