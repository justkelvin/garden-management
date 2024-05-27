import express from 'express';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';
import { doctorTimeSlotController } from './doctorTimeSlot.controller';

const router = express.Router();

router.get('/my-slot', auth(AuthUser.GARDENER), doctorTimeSlotController.getMyTimeSlot);
router.get('/:id', auth(AuthUser.GARDENER), doctorTimeSlotController.getTimeSlot);
router.get('/appointment-time/:id', doctorTimeSlotController.getAppointmentTimeOfEachDoctor);
router.post('/create', auth(AuthUser.GARDENER), doctorTimeSlotController.createTimeSlot);
router.get('/', doctorTimeSlotController.getAllTimeSlot);
router.patch('/', auth(AuthUser.GARDENER), doctorTimeSlotController.updateTimeSlot);
router.delete('/', auth(AuthUser.GARDENER), doctorTimeSlotController.deleteTimeSlot);

export const DoctorTimeSlotRouter = router;