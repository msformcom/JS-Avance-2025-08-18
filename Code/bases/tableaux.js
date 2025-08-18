let t1=[1,3,6,3];
let t2=[6,8,3,8];

let s=t1.join(",");
console.log(s);
console.log(s.split(","))

if(2=="2"){
    // true
}
if(2==="2"){
    // false
}

// fusionner t1 et t2
let t3=t1.concat(t2);
console.log(t3);

// spread operator 
let t4=[...t1,...t2];
console.log(t4);


let [a,b]=[1,2]; // a=1; b=2;

[a,b]=[b,a]; // inverse les valeurs de a et de b

