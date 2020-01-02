const express = require('express')
const router = express.Router()
const moment = require('moment')

router.get('/', async function (req, res) {
    res.send("fatrr")
})

router.post('/1',async function (req, res) {
    res.send("trans")
})
router.delete('/2', async function (req, res) {
    res.send("deleted")
})

module.exports = router
