const router = require('express').Router()
const knex = require('knex')

const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

router.get('/', async (req, res) => {
    try {
        const actions = await db('actions')
        res.status(200).json(actions)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "There was an error receiving the actions" })
    }
})

router.post('/', async (req, res) => {
    const {project_id, description, notes} = req.body
    if (!project_id || !description || !notes) {
       res.send({message: "Please provide all fields"}) 
    }
    try {
        const [id] = await db('actions').insert(req.body)
        const action = await db('actions').where({id}).first()
        res.status(201).json(action)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "There was an error" })
    }
})


module.exports = router