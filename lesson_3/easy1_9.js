// In the previous problem, our first answer added 'Dino' to the array:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

// Option 1
console.log(flintstones.concat('Dino', 'Hoppy'));

// option 2
flintstones.push('Dino', 'Hoppy');
console.log(flintstones);