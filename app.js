import { question } from "readline-sync";
import Player from "./classes/Player.js";
import riddles from "./riddles/riddlesArr.js";
import timeWrapper from "./utils/timer.js";

// Loop over the riddles
for (const riddle of riddles) {
  timeWrapper(() => riddle.ask(), player);
}

// Starting the game
const playerName = question("What is your name? ");
console.log(`Hi ${playerName}!\nWelcome to the Riddle Game!`);

const player = new Player(playerName);

player.showStats();
