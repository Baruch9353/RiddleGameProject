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


