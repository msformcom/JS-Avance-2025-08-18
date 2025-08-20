import { Voiture } from "../voiture.mjs";

describe("Test de la class Voiture", function () {
    let error = undefined;
    beforeAll(()=>{
        
    });
    beforeEach(()=>{
        error=undefined;
    });
    it("Constructeur modele non vide", function () {
        // Arrange
        let modele = "C3";

        // Act

        let v = undefined;


        // Assert
        try {
            v=new Voiture(modele);

        } catch (e) {
            error = e;
        }
        expect(error).toBeFalsy();
        expect(v.modele)
            .withContext("le paramètre de construction n'est pas sauvegardé dans la propriété modele")
            .toBe(modele);
    });
    it("Constructeur modele vide", function () {
        // Arrange
        let modele = "";
        let v = undefined;


        // Act
        try {
            v = new Voiture(modele);

        } catch (e) {
            error = e;
        }


        // Assert
        expect(error)
            .withContext("le paramètre de construction vide fonctionne")
            .toBeTruthy();
    });

    it("modele jamais vide", () => {
// Arrange
        let modele = "C3";
        let v = undefined;


        // Act
        try {
            v = new Voiture(modele);
            v.modele="";

        } catch (e) {
            error = e;
        }


        // Assert
        expect(error)
            .withContext("une chaine vide peut être affectée au modele")
            .toBeTruthy();
    });
});