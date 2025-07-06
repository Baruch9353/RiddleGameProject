// import { loadRiddles } from '../riddlesData.js';   ????????????????????


export function readRiddles() {
  const riddles = loadRiddles();

  if (riddles.length === 0) {
    console.log("No riddles found.");
    return;
  }

  console.log("\nAll riddles:");
  riddles.forEach(r => {
    console.log(`ID: ${r.id}, Name: ${r.name}, Description: ${r.taskDescription}`);
  });
}

