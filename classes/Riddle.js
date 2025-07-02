import { question } from "readline-sync";

class Riddle {
    // initialize riddle properties
    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }

    // prompt user until correct answer is given
    ask() {
        console.log(`Riddle ${this.id}: ${this.name}`);
        let answer = question(this.taskDescription);

        while (answer.toLowerCase() !== this.correctAnswer.toLowerCase()) {
            console.log("Incorrect answer");
            answer = question(this.taskDescription);
        }
        console.log("Correct!");
    }
}

export default Riddle;

