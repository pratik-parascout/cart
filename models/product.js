const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

productSchema.statics.deleteById = function (prodId) {
  return this.deleteOne({ _id: prodId })
    .then((result) => {
      console.log('Deleted');
      return result;
    })
    .catch((err) => {
      console.error('Delete Error:', err);
      throw err;
    });
};

module.exports = mongoose.model('Product', productSchema);
