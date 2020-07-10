const connection = require('../database/connection');


module.exports ={
        async index(req, res){

            const { page = 1 } = req.query;
            const [count] = await connection('clientes').count();
            
            const clientes = await connection('clientes').select('*').limit('15').offset((page-1)*15);
    
            res.header('X-total-count', count['count(*)']);        
                
            return res.json(clientes);
        },

        async indexPgto(req, res){

            const soma = await connection('clientes').select('valor').where('formaPgt', 'like', '%À vista%').sum('valor');
            //connection('clientes').select('valor').where('formaPgto', 'LIKE', '%À%').sum();
            return res.json(soma);
        },

        async create(req, res){

            const { data,
                    nome,
                    valor,
                    formaPgt,
                    formaEtrg } = req.body;
            
            await connection('clientes')
            .insert({
                data,
                nome,
                valor,
                formaPgt,
                formaEtrg});
            
                return res.json({nome})

        },
        async delete(req, res){
            const { id } = req.params;

            await connection('clientes').where('id', id).delete();

            return res.status(204).send();
        }
}
