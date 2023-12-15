
const index = async (req, res, next) => {
  console.log('received index request');
  try {
    // api
    res.send('send back template images')
    // res.status(200).json(images);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const search = async (req, res, next) => {
    console.log('received index request');
    try {
      // api
      res.send('send back template images from a search')
      // res.status(200).json(images);
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  };

module.exports = {
  index,
  search
}