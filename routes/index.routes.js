const express = require("express");
const router = express.Router();
const Dog = require("../models/Dog.model");


router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/dogs", async (req, res, next) => {
  try {
    const allDogs = await Dog.find();
    res.status(200).json(allDogs);
  } catch (error) {
    console.log(error);
  }
});

router.get("/dogs/:dogId", async (req, res, next) => {
  try {
    const {dogId} = req.params;
    const dog = await Dog.findById(dogId);
    res.status(200).json(dog);  
  } catch (error) {
    console.log(error);
  }
});

router.post("/dogs", async (req, res, next) => {
  try {
  const newDog = await Dog.create(req.body);
  res.status(201).json(newDog);  
  } catch (error) {
    console.log(error);
  }
});

router.put("/dogs/:dogId", async (req, res, next) => {
  try {
    const {dogId} = req.params
    const updatedDog = req.body 
    await Dog.findByIdAndUpdate(dogId, updatedDog, {new:true} )
    res.json({ message: "Updated dog information successfully."})
  } catch (error) {
    console.log(error);
  }
})

router.delete('/dogs/:dogId', async (req, res, next) => {
  try {
    const {dogId} = req.params
    await Dog.findByIdAndDelete(dogId)
    res.json({ message: "Deleted dog information successfully."})
  } catch (error) {
    console.log(error);
  }
})
module.exports = router;
