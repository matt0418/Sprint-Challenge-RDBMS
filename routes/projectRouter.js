const router = require('express').Router()
const knex = require('knex')

const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

router.get('/', async (req, res) => {
    try {
        const projects = await db('projects')
        res.status(200).json(projects)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "There was an error receiving the projects" })
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const project = await db('projects')
            .where({id})
            .first()
            if (project) {
                const actions = await db('actions')
                .where({'project_id': id})
                project.actions = actions
                res.status(200).json(project)
            } else {
                res.status(404).json({ message: "There is no project with this ID" })
            }
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "There was an error retrieving the project" })
    }
})

router.post('/', async (req, res) => {
    try {
        const [id] = await db('projects').insert(req.body)
        const project = await db('projects').where({id}).first()
        res.status(201).json(project)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: "There was an error"})
    }
})

module.exports = router