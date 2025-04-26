const express = require('express');
const {
  createPatient,
  getPatients,
  getPatientByHospitalId,
  updatePatient,
  deletePatient,
} = require('../controllers/patientController');

const router = express.Router();

router.post('/', createPatient);
router.get('/', getPatients);
router.get('/:id', getPatientByHospitalId);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

module.exports = router;