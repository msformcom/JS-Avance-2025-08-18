
// Système de module => importer des éléments d'un autre fichier
import {Voiture, Camion} from "./classes.js";

import * as Automotive from "./classes.js";

let v=new Voiture();
let c=new Automotive.Camion();


console.log(c);