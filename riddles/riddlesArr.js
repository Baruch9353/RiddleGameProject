import Riddle from '../classes/Riddle.js';
import { loadRiddles } from './riddlesData.js';

const rawRiddles = loadRiddles();

const riddles = rawRiddles.map(r => new Riddle(r.id, r.name, r.taskDescription, r.correctAnswer));

export default riddles;


