const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, 'Please enter the first name'] },
  lastName: { type: String, required: [true, 'Please enter the last name'] },
  phone: { type: Number, required: [true, 'Please enter the phone'] },
  address: { type: String, required: [true, 'Please enter the address'] },
  weight: { type: String, required: false, default: '0' },
  height: { type: String, required: false, default: '0' },
  remark: { type: String, required: false, default: '' },
  token: { type: String, required: true, unique: true },
  regDate: { type: Date, required: true, default: new Date() },
  subscriptionExpiration: { type: Date, required: false },
  subscriptionStatus: { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model('Members', memberSchema)
