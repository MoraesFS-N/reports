const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const { id, password } = req.body;

        const user = await connection('user')
        .where('id', id).where('password', password)
        .select('name')
        .first();

        if (!user) {
            return response.status(400).json({ error: 'Não há nenhum usuário correspondente a estes dados.'});
        }

        return res.json(user);
    }  

}