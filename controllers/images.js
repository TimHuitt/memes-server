const Image = require('../models/image')
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const cloudinaryConfig = require("../config/cloudinary").clConfigEnv;
cloudinary.config(cloudinaryConfig);


const index = async (req, res, next) => {
  console.log('received index request');
  try {
    const images = await Image.find({});
    res.status(200).json(images);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// const create = async (req, res, next) => {
//   console.log('received create request');
//   try {
//     console.log('Request file:', req.file);
//     console.log('Request body:', req.body);

//     // Temporarily return a success response without doing any database operations
//     res.status(200).json({ message: 'File received' });
//   } catch (err) {
//     res.status(400).json({ err: err.message });
//   }
// };

const create = async (req, res, next) => {
  console.log('received create request');
  try {
    console.log('Request file:', req.file);

    let result = await streamUpload(req);
    console.log('Cloudinary result:', result);

    const newImage = await Image.create({ url: result.url });
    console.log('Database entry:', newImage);

    res.status(201).json(newImage);
  } catch (err) {
    console.error(err);
    res.status(400).json({ err: err.message });
  }
};

// const create = async (req, res, next) => {
//   console.log('received create request');
//   try {
//     console.log(req.body);

//     let result = await streamUpload(req);
//     console.log(result);
//     const newImage = { url: result.url };

//     req.body.images = [];

//     req.body.images.push(newImage);

//     const post = await Image.create(req.body);
//     console.log(post)

//     res.status(201).json(newImage);
//   } catch (err) {
//     res.status(400).json({ err: err.message });
//   }
// };


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


function streamUpload(req) {
  return new Promise(function (resolve, reject) {
    let stream = cloudinary.uploader.upload_stream(function (error, result) {
      if (result) {
        resolve(result);
      } else {
        reject(error);
      }
    });
    streamifier.createReadStream(req.file.buffer).pipe(stream);
  });
}


module.exports = {
  index,
  create,
  show,
  // update,
  // delete: destroy,
}