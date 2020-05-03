/*
Each UUID consists of 32 hexadecimal characters represented as a string.
The value is typically broken into 5 sections in an 8-4-4-4-12 pattern,
e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no parameters and returns a UUID.
*/

function generateRandomHex() {
  const HEX_BASE32 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a', 'b', 'c', 'd', 'e', 'f'
  ];

  let randIdx = Math.floor(Math.random() * HEX_BASE32.length);

  return HEX_BASE32[randIdx];
}

function generateUUID() {
  // const FIRST_SECTION_SIZE = 8;
  // const MIDDLE_SECTION_SIZE = 4;
  // const LAST_SECTION_SIZE = 12;
  let sectionsLength = [8, 4, 4, 4, 12];

  let uuid = sectionsLength.map(section => {
    let sequence = [];
    for (let idx = 0; idx < section; idx += 1) {
      sequence.push(generateRandomHex());
    }
    return sequence.join('');
  });
  return uuid.join('-');
}

console.log(generateUUID());