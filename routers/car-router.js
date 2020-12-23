const express = require("express")
const db = require("../data/connect")
const router = express.Router()

// GET LIST OF CARS
router.get("/cars", async (req, res, next) => {
    try {
        res.json(await db("car-dealer"))
    } catch (err) {
        next(err)
    }
})

// GET CAR BY ID
router.get("/cars/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const car = await db("car-dealer").where({ id }).first()

        res.json(car)
    } catch (err) {
        next(err)
    }
})

// POST CAR
router.post("/cars", async (req, res, next) => {
    try {
        const [id] = await db("car-dealer").insert(req.body)
        const newCar = await db("car-dealer").where({ id }).first()

        res.status(201).json(newCar)
    } catch (err) {
        next(err)
    }
})

// DELETE CAR
router.delete("/cars/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        await db("car-dealer").where("id", id).del()
        res.json({
            message: `Car ${id} was deleted`
        })
    } catch (err) {
        next(err)
    }
})

// UPDATE CAR
router.put("/cars/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const payload = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            titleStatus: req.body.titleStatus,
        }
        await db("car-dealer").where("id", id).update(payload)

        const car = await db("car-dealer").where("id", id).first()
        res.json(car)

    } catch (err) {
        next(err)
    }
})

module.exports = router