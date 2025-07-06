import fs from 'fs';

const filePath = './riddles/db.txt';

// Reads and parses riddles from the JSON file
export function loadRiddles() {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Saves the riddles array back to the JSON file, formatted nicely (2)
export function saveRiddles(riddles) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(riddles, null, 2), 'utf-8');
  } catch (error) {
    console.log(error);
  }
}
