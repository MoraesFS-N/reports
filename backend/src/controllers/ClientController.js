const connection = require('../database/connection');


module.exports ={
        async index(req, res){

            const { page = 1 } = req.query;
            const [count] = await connection('client').count();
            
            const client = await connection('client').select('*').limit('15').offset((page-1)*15);
    
            res.header('X-total-count', count['count(*)']);        
                
            return res.json(client);
        },

        async create(req, res){

            const { date,
                    name,
                    value,
                    payment,
                    delivery } = req.body;
            
            await connection('client')
            .insert({
                date,
                name,
                value,
                payment,
                delivery});
            
                return res.json({name})

        },
        async delete(req, res){
            const { id } = req.params;

            await connection('client').where('id', id).delete();

            return res.status(204).send();
        }
}
