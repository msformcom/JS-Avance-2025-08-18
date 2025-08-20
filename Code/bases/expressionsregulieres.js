let s="Toto aime les belles voitures toutes neuves et titi aussi";

let regImmat=/^([A-Z]{2})\-?([1-9][0-9]{2})\-?([A-Z]{2})$/;
console.log(regImmat.test("TG-067-RT"));

let A56H="tr";

let A72B="tr";


console.log("TG-167-RT".replace(regImmat,"$3-$2-$1"));