const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.use(express.json())

router.get('/', async (req, res) => {
    const boards = await prisma.board.findMany()
    res.json(boards)
})

router.get('/category/:category', async (req, res) => {
    // Handling not having that category
    try {
        const { category } = req.params

        if (category == "All") {
            const boards = await prisma.board.findMany()
            res.json(boards)
        }
        else if (category == "Recent") {
            const boards = await prisma.board.findMany({
                orderBy: {
                    id: 'desc'
                },
            })
            res.json(boards)
        }
        else {
            const boards = await prisma.board.findMany({
                where: { category: category }
            })
            res.status(200).json(boards)
        }
    }
    catch (error) {
        console.log("Error getting board:", error)
        res.status(500).json({ error: 'Failed to retrieve board.' })
    }
})

router.get('/search/:search', async (req, res) => {
    try {
        const searchQuery = req.params.search
        const board = await prisma.board.findMany({
            where: {
                title: { startsWith: searchQuery, mode: 'insensitive' },
            },
        })
        res.status(200).json(board)
    }
    catch (error) {
        console.log("Error getting board:", error)
        res.status(500).json({ error: 'Failed to retrieve board.' })
    }
})

router.get('/id/:id', async (req, res) => {
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

router.post('/add', async (req, res) => {
    const { title, category, author } = req.body

    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}`)
    const gifData = await response.json()
    const imageUrl = gifData.data.images.downsized.url

    const newBoard = await prisma.board.create({
        data: {
            title,
            imageSrc: imageUrl,
            category,
            author
        }
    })
    res.json(newBoard)
})

router.put('/:id', async (req, res) => {
    const { id } = parseInt(req.params)
    const { title, category, author } = req.body

    const updatedBoard = await prisma.board.update({
        where: { id: id },
        data: {
            title,
            category,
            author
        }
    })

    res.json(updatedBoard)
})

router.delete('/delete/:id', async (req, res) => {
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
