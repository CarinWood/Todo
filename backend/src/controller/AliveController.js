

const alive = (req, res) => {
    res.status(200).send('API is alive')
}

export default {
    alive,
}