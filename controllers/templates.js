const axios = require('axios');

const index = async (req, res, next) => {
  console.log('received index request');
  try {
    const response = await axios.get('https://api.imgflip.com/get_memes');
    const memes = response.data.data.memes; // Extract the memes array from the response
    res.status(200).json(memes); // Send back the memes array
  } catch (err) {
    console.error(err);
    res.status(400).json({ err: err.message });
  }
};

module.exports = {
  index
};



// const search = async (req, res, next) => {
//     console.log('received index request');
//     try {
//       // api
//       res.send('send back template images from a search')
//       // res.status(200).json(images);
//     } catch (err) {
//       res.status(400).json({ err: err.message });
//     }
//   };
