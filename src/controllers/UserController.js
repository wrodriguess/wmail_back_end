const knex = require('../database')

module.exports = {

    async create(req, res, next){
        try{
            const {name, email, password} = req.body
            await knex('users').insert({name, email, password})
            return res.status(201).json()
        }catch(error){
            next(error)
        }
    },

    async all(req, res, next){
        try{
            const results = await knex('users')
            return res.status(200).json(results)
        }catch(error){
            next(error)
        }
    },

    async getById(req, res, next){
        try{
            const {id} = req.params
            const result = await knex('users').where({id})
            return res.status(200).json(result)
        }catch(error){
            next(error)
        }
    },

    async getByEmail(req, res, next){
        try{
            const {email} = req.params
            const result = await knex('users').where({email})

            if(result.length > 0){
                return res.status(200).json(result)
            }else{
                return res.status(404).json({error: 'User not found'})
            }

        }catch(error){
            next(error)
        }
    },

    async update(req, res, next){
        try{
            const {id} = req.params
            const {name, password} = req.body
            await knex('users').update({name, password}).where({id})
            return res.status(200).json()
        }catch(error){
            next(error)
        }
    }, 

    async disable(req, res, next){
        try{
            const {id} = req.params
            await knex('users').update({deleted_at: new Date()}).where({id})
            return res.status(200).json()
        }catch(error){
            next(error)
        }
    }



}