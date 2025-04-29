const express = require('express');
const {
  createPatient,
  getPatients,
  getPatientByHospitalId,
  updatePatient,
  deletePatient,
  updatePatientById,
  deletePatientById,
} = require('../controllers/patientController');

const router = express.Router();

router.post('/', createPatient);
router.get('/', getPatients);
router.get('/:id', getPatientByHospitalId);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);
router.put('/byObjectId/:id', updatePatientById);
router.delete('/byObjectId/:id', deletePatientById);

module.exports = router;