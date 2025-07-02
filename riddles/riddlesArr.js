import { loadRiddles } from './riddlesData.js';
import Riddle from '../classes/Riddle.js';

// Load riddle objects from the data file
const riddleObjects = loadRiddles();

// Convert each plain riddle object into a Riddle class instance
const allRiddles = riddleObjects.map(r => new Riddle(
  r.id,
  r.name,
  r.taskDescription,
  r.correctAnswer
));

export default allRiddles;

