// Ce script, utilisé comme worker pourra réagir à l'envoi d'un message provenant du script principal
// data provient du script principal
interface MessageData {
    a: number;
    b: number;
}
self.addEventListener("message", (e: MessageEvent<MessageData>) => {
    // Dans un worker, ce code sera exécuté en parrallele
    // je ne dispose pas ici de l'objet window ou tout autre objet du thread principal
    // pour éviter de l'accès concurrent (je modifie une propriété en même temps que le thread principal)
    let a = e.data.a;
    let b = e.data.b;
    let r = 0;
    for (let i = 0; i < a; i++) {
        r++;
    }
    for (let i = 0; i < b; i++) {
        r++;
    }
    // Envoyer un message au thread principal (le résultat)
    postMessage(r);
})