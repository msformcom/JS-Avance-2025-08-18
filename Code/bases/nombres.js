let a=1;
let b=new Number(12.5);

let s="3.2";
let ns=+s;

ns=parseFloat(s);

let s2=ns.toFixed(3); // avec 3 chiffres après la virgule;

let zero=0;

let inf=1/zero;

console.log(inf);

console.log(1/inf);
let zeroMoins=-0;
console.log(1/zeroMoins);

let impossible=Math.sqrt(-4); //NaN
console.log(impossible);