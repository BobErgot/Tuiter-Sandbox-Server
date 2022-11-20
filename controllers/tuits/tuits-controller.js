import posts from "./tuits.js";
let tuits = posts;

export const currentUser = {
    "userName": "Bobby", "handle": "bob", "avatar": "../../images/profile-image.svg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Hot",
    "time": "1 min",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const createTuit = (req, res) => {
    const newTuit = {
        ...req.body,
        ...templateTuit
    };
    newTuit._id = (new Date()).getTime()+'';
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) => res.json(tuits);

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
                             t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}