const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const patientSchema = new mongoose.Schema({
  patientHospitalId: { type: String, required: true, unique: true },
  patientName: { type: String, required: true },
  doctorName: { type: String, required: true },
  hospitalName: { type: String, required: true },
  SOPDocument: { type: String },
  patientDocument: { type: String },
  medications: [medicationSchema],
  additionalInfo: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);