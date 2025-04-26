const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const patientSchema = new mongoose.Schema({
  patientHospitalId: { type: String, required: true },
  patientName: { type: String },
  doctorName: { type: String },
  hospitalName: { type: String },
  SOPDocument: { type: String },
  patientDocument: { type: String },
  medications: [medicationSchema],
  additionalInfo: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);