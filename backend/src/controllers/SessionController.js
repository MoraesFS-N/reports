const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const { id, password } = req.body;

        const ong = await connection('user')
        .where('id', id).where('password', password)
        .select('name')
        .first();

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID'});
        }

        return res.json(user);
    }  

}