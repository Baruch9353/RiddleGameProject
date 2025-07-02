class Player {
    //initialize player with name and empty times array
    constructor(name) {
        this.name = name;
        this.times = [];
    }

    //calculate duration and store it in times array
    recordTime(start, end) {
        const duration = (end - start) / 1000;
        this.times.push(duration);
    }

    //compute and display total and average times
    showStats() {
        let totalTime = 0;
        this.times.forEach(t => totalTime += t)
        const average = totalTime / this.times.length;
        console.log(`\nTotal time: ${totalTime.toFixed(2)} seconds.
             \nAverage per riddle: ${average.toFixed(2)} seconds.`);
    }
}

export default Player;







