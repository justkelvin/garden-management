import express from 'express';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';
import { PrescriptionController } from './prescription.controller';

const router = express.Router();

router.get('/gardener/prescription', auth(AuthUser.GARDENER), PrescriptionController.getDoctorPrescriptionById);
router.get('/customer/prescription', auth(AuthUser.CUSTOMER), PrescriptionController.getPatientPrescriptionById);

router.get('/:id', PrescriptionController.getPrescriptionById);
router.get('/', PrescriptionController.getAllPrescriptions);

router.post('/create', auth(AuthUser.GARDENER, AuthUser.ADMIN), PrescriptionController.createPrescription);

router.delete('/:', auth(AuthUser.GARDENER, AuthUser.ADMIN), PrescriptionController.deletePrescription);
router.patch('/', auth(AuthUser.GARDENER, AuthUser.ADMIN), PrescriptionController.updatePrescription);
router.patch('/update-prescription-appointment', auth(AuthUser.GARDENER, AuthUser.ADMIN), PrescriptionController.updatePrescriptionAndAppointment);

export const PrescriptionRouter = router;