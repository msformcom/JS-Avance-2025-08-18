let maintenant=new Date();

let maDateDeNaissance=new Date(1968,8,11); // 11 septemùbre 1968
let date2=new Date(2025,10,34); // 4 décembre 2025

// modifier maintenant pour ajouter un mois
maintenant.setMonth(maintenant.getMonth()+1)

// modifier maintenant pour ajouter un jour
maintenant.setDate(maintenant.getDate()+1);

// Créqtion d'une nouvelle Date à partir de maintent et ajout d'un jour
let demain=new Date(maintenant).setDate(maintenant.getDate()+1);

let maintenantNumber=Date.now();
let demainNumber=Date.now()+24*60*60*1000;
demain=new Date(demainNumber);

const moment =require("moment");
let m=moment();
var demainMoment=m.add(7,"days");

