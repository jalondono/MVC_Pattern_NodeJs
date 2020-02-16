module.exports = (req, res) => {
    return res.status(404).send({message: "Not found"})
};