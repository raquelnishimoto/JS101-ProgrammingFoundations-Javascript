// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// Option 2 - non destructive
console.log(flintstones.concat('Dino'));

// Option 2 - destructive
flintstones.push('Dino');
console.log(flintstones);


