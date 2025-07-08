import { question } from "readline-sync";
import Player from "./classes/Player.js";
import riddles from "./riddles/riddlesArr.js";
import timeWrapper from "./utils/timer.js";



// Starting the game
const playerName = question("What is your name? ");
console.log(`Hi ${playerName}!
Welcome to the Riddle Game!
===========================`);

const player = new Player(playerName);

// Loop over the riddles
for (const riddle of riddles) {
  timeWrapper(() => riddle.ask(), player);
}

player.showStats();



