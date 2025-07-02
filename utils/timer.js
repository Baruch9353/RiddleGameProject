// time Wrapper cb

export default function timeWrapper(cb, player){
    const start = Date.now();
    cb();
    const end = Date.now();
    player.recordTime(start, end);
}
