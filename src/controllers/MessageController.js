const knex = require('../database')

module.exports = {

    async inbox(req, res, next){
        try{
            const {id_recipient} = req.params
            const results = await knex('messages').where({id_recipient}).andWhere({spam: false}).andWhere({deleted_at: null})
            return res.status(200).json(results)
        }catch(error){
            next(error)
        }
    },

    async important(req, res, next){
        try{
            const {id_recipient} = req.params
            const results = await knex('messages').where({id_recipient}).andWhere({important: true}).andWhere({spam: false}).andWhere({deleted_at: null})
            return res.status(200).json(results)
        }catch(error){
            next(error)
        }
    },

    async sent(req, res, next){
        try{
            const {id_sender} = req.params
            const results = await knex('messages').where({id_sender})
            return res.status(200).json(results)
        }catch(error){
            next(error)
        }
    },

    async trash(req, res, next){
        try{
            const {id_recipient} = req.params
            const results = await knex('messages').whereNotNull('deleted_at').andWhere({id_recipient})
            return res.status(200).json(results)
        }catch(error){
            next(error)
        }
    },

    async compose(req, res, next){
        try{
            const {id_sender} = req.params
            let id_recipient
            const {email, subject, body} = req.body
            const [exists] = await knex('users').where({email})
            
            
            if(exists){
                id_recipient = exists.id
            }else{
                return res.status(404).json({error: 'Destinatário não existe'})
            }

            await knex('messages').insert({id_sender, id_recipient, subject, body})
            return res.status(201).json()
        }catch(error){
            next(error)
        }
    },

    async read(req, res, next){
        try{
            const {id} = req.params
            const result = await knex('messages').where({id})

            if(result){
                await knex('messages').update({visualized: true}).where({id})
            }

            return res.status(200).json(result)
        }catch(error){
            next(error)
        }
    },

    async spam(req, res, next){
        try{
            const {id_recipient} = req.params
            const results = await knex('messages').where({id_recipient}).andWhere({spam: true})
            return res.status(200).json(results)
        }catch(error){
            next(error)
        }
    },

    async report_spam(req, res, next){
        try{
            const id = req.params.id_message
            await knex('messages').update({spam: true}).where({id})
            return res.status(200).json()
        }catch(error){
            next(error)
        }
    }, 

    async delete(req, res, next){
        try{
            const id = req.params.id_message
            await knex('messages').update({deleted_at: new Date()}).where({id})
            return res.status(200).json()
        }catch(error){
            next(error)
        }
    }, 




}