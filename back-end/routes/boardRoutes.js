const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.use(express.json())

router.get('/', async (req, res) => {
    const boards = await prisma.board.findMany()
    res.json(boards)
})

router.get('/:id', async (req, res) => {
    // Handling not having that id
    try {
        const { id } = req.params

        const board = await prisma.board.findUnique({
            where: { id: parseInt(id) }
        })
        res.status(200).json(board)
    }
    catch (error) {
        console.log("Error getting board:", error)
        res.status(500).json({ error: 'Failed to retrieve board.' })
    }
})

router.post('/', async (req, res) => {
    const { title, imageSrc, category, author } = req.body

    const boards = await prisma.board.findMany()
    const newBoard = await prisma.board.create({
        data: {
            title,
            imageSrc,
            category,
            author
        }
    })
    res.json(newBoard)
})

router.put('/:id', async (req, res) => {
    const { id } = parseInt(req.params)
    const { title, imageSrc, category, author } = req.body

    const updatedBoard = await prisma.board.update({
        where: { id: id },
        data: {
            title,
            imageSrc,
            category,
            author
        }
    })

    res.json(updatedBoard)
})

router.delete('/:id', async (req, res) => {
    // Handling not having that id
    try {
        const { id } = req.params
        const deletedBoard = await prisma.board.delete({
            where: { id: parseInt(id) }
        })
        res.status(200).json(deletedBoard)
    }
    catch (error) {
        console.log("Error deleting board:", error)
        res.status(500).json({ error: 'Failed to delete board.' })
    }
})

module.exports = router
