const Image = require('../models/image')

const index = async (req, res, next) => {
  console.log('received index request');
  try {
    const images = await Image.find({});
    res.status(200).json(images);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const create = async (req, res, next) => {
  console.log('received create request');
  try {
    console.log(req.body);
    const newImage = await Image.create(req.body);
    res.status(201).json(newImage);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};


const show = async (req, res, next) => {
  console.log('received show request')
  try {
    res
      .status(201)
      .json(await Image.findById(req.params.id))
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}

// const update = async (req, res, next) => {
  
  
//   try {
//     res
//       .status(201)
//       .json(await Image.findByIdAndUpdate(req.params.id, req.body, {new: true}))
//   } catch (err) {
//     res.status(400).json({err: err.message})
//   }
// }

// const destroy = async (req, res, next) => {
//   try {
//     res
//       .status(201)
//       .json(await Image.findByIdAndDelete(req.params.id))
//   } catch (err) {
//     res.status(400).json({err: err.message})
//   }
// }

module.exports = {
  index,
  create,
  show,
  // update,
  // delete: destroy,
}