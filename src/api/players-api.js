const players = [
    {"id": "1", name: "Nikita"},
    {"id": "2", name: "Opponent"},
    {"id": "3", name: "Roger Federer"},
    {"id": "4", name: "Marin Cilic"},
];

export default {
    getAll(cb) {
        setTimeout(() => cb(players), 100)
    }
}