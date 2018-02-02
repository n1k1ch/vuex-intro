const entries = [
    {id: "1", playerOne: "1", playerTwo: "2", scoreOne: 3, scoreTwo: 1}
];

export default {
    getAll(cb) {
        setTimeout(() => {cb(entries)}, 100);
    }
}