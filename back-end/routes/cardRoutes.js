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
                boardId: boardId,
                upVotes: 0
            }
        })
        res.status(200).json(newCard)
    }
    catch (error) {
        console.log("Error getting board coards:", error)
        res.status(500).json({ error: 'Failed to retrieve board cards.' })
    }
})

router.patch('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const card = await prisma.card.findUnique({
        where: { id }
    })

    if (!card) {
        return res.status(404).send({ message: 'Card not found' })
    }

    const updatedCard = await prisma.card.update({
        where: { id },
        data: { upVotes: card.upVotes + 1 },
    })
    res.json(updatedCard)
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
