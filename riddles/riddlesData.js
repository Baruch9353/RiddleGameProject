import fs from 'fs';

const filePath = './riddles/db.txt';

// Reads and parses riddles from the JSON file
export function loadRiddles() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// Saves the riddles array back to the JSON file, formatted nicely
export function saveRiddles(riddles) {
  fs.writeFileSync(filePath, JSON.stringify(riddles, null, 2), 'utf-8');
}
