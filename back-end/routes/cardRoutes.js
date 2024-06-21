const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.use(express.json())

router.get('/:id', async (req, res) => {
    try {
        const boardId = parseInt(req.params.id)

        const board = await prisma.board.findUnique({
            where: {
                id: boardId
            },
            include: { cards: true }
        })
        res.status(200).json(board.cards)
    }
    catch (error) {
        console.log("Error getting board coards:", error)
        res.status(500).json({ error: 'Failed to retrieve board cards.' })
    }
})

router.post('/add/:id', async (req, res) => {
    try {
        const boardId = parseInt(req.params.id)
        const board = await prisma.board.findUnique({
            where: {
                id: boardId
            },
            include: { cards: true }
        })

        const { cardTitle, cardInfo, cardImage, cardOwner } = req.body
        const newCard = await prisma.Card.create({
            data: {
                cardTitle,
                cardInfo,
                cardImage,
                cardOwner,
                boardId: boardId
            }
        })
        res.status(200).json(newCard)
    }
    catch (error) {
        console.log("Error getting board coards:", error)
        res.status(500).json({ error: 'Failed to retrieve board cards.' })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const cardId = parseInt(req.params.id)
        await prisma.card.delete({
            where: {
                id: cardId
            }
        })
        res.status(200).json({ message: 'Card deleted successfully' })
    } catch (error) {
        console.log("Error deleting board:", error)
        res.status(500).json({ error: 'Failed to delete Card' })
    }
})

module.exports = router
