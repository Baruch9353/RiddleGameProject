import Riddle from "../classes/Riddel.js"; 
import r1 from './r1.js';
import r2 from './r2.js';
import r3 from './r3.js';

// Initialize and export an array of Riddle instances from imported riddle data

const riddles = [r1, r2, r3];

const allRiddles = riddles.map(r => {
    return new Riddle(
        r.id,
        r.name,
        r.taskDescription,
        r.correctAnswer
    );
});

export default allRiddles;
