const Patient = require('../models/patientModel');

// Create a patient record
exports.createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get patient by hospital ID
exports.getPatientByHospitalId = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findOne({ patientHospitalId: id });
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update patient
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findOneAndUpdate(
      { patientHospitalId: req.params.id },
      req.body,
      { new: true }
    );
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete patient
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findOneAndDelete({ patientHospitalId: req.params.id });
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });
    res.json({ msg: 'Patient deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};