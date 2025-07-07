import Riddle from '../classes/Riddle.js';
import { loadRiddles } from './riddlesData.js';

const rawRiddles = loadRiddles();

// create an instance of Riddle for each riddle in rawRiddles

const riddles = rawRiddles.map(r => new Riddle(r.id, r.name, r.taskDescription, r.correctAnswer));

export default riddles;


