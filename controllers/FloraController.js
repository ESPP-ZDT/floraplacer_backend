const Flora = require("../models/FloraModel");
const asyncHandler = require("express-async-handler");

const addFlora = asyncHandler(async (req, res) => {
  const { name, lat, lng, type, species, addedBy } = req.body;
  if (!name || !lat || !lng || !type || !species) {
    res.status(400);
    throw new Error("Please fill all the required fields");
    return;
  } else {
    const newFlora = new Flora({
      name,
      lat,
      lng,
      type,
      species,
      addedBy,
    });

    const createdFlora = await newFlora.save();

    res.status(201).json(createdFlora);
  }
});

const getFlora = asyncHandler(async (req, res) => {
    try {
      const flora = await Flora.find();
      res.json(flora);
    } catch (err) {
      res.status(400).json({ success: false, error: err });
    }
  });

  const getFloraById = asyncHandler(async (req, res) => {
    const flora = await Flora.findById(req.params.id);
    if (!flora) {
        res.status(404);
        throw new Error("Flora not found");
        return;
    }
    res.json(flora);
});

const updateFlora = asyncHandler(async (req, res) => {
    const flora = await Flora.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!flora) {
        res.status(404);
        throw new Error("Flora not found");
        return;
    }
    res.json(flora);
});

const deleteFlora = asyncHandler(async (req, res) => {
    const flora = await Flora.findByIdAndRemove(req.params.id);
    if (!flora) {
        res.status(404);
        throw new Error("Flora not found");
        return;
    }
    res.json({ success: true });
});


module.exports ={addFlora, getFlora, getFloraById, updateFlora, deleteFlora}
