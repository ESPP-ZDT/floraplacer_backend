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

const getFlora = (req, res) => {
    Flora.find()
    .then(flora => res.json(flora))
    .catch(err => res.status(400).json({ success: false, error: err }));
};

const getFloraById = (req, res) => {
    Flora.findById(req.params.id)
    .then(flora => res.json(flora))
    .catch(err => res.status(400).json({ success: false, error: err }));
};

const updateFlora = (req, res) => {
    Flora.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(flora => res.json(flora))
    .catch(err => res.status(400).json({ success: false, error: err }));
};

const deleteFlora = (req, res) => {
    Flora.findByIdAndRemove(req.params.id)
    .then(() => res.json({success: true}))
    .catch(err => res.status(400).json({ success: false, error: err }));
};

module.exports ={addFlora, getFlora, getFloraById, updateFlora, deleteFlora}
