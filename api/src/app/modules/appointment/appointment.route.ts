import express from 'express';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';
import { AppointmentController } from './appointment.controller';

const router = express.Router();

router.get('/', AppointmentController.getAllAppointment);

router.get('/customer/appointments',auth(AuthUser.CUSTOMER), AppointmentController.getPatientAppointmentById);
router.get('/customer/invoices',auth(AuthUser.CUSTOMER), AppointmentController.getPatientPaymentInfo);
router.get('/gardener/invoices',auth(AuthUser.GARDENER), AppointmentController.getDoctorInvoices);

router.get('/gardener/appointments',auth(AuthUser.GARDENER), AppointmentController.getDoctorAppointmentsById);
router.get('/gardener/patients',auth(AuthUser.GARDENER), AppointmentController.getDoctorPatients);

router.get('/customer-payment-info/:id',auth(AuthUser.CUSTOMER, AuthUser.GARDENER), AppointmentController.getPaymentInfoViaAppintmentId);

router.post('/tracking', AppointmentController.getAppointmentByTrackingId);
router.post('/create', AppointmentController.createAppointment);
router.post('/create-un-authenticate', AppointmentController.createAppointmentByUnAuthenticateUser);

router.get('/:id', AppointmentController.getAppointment);

router.delete('/:id', AppointmentController.deleteAppointment);
router.patch('/:id', auth(AuthUser.ADMIN, AuthUser.GARDENER, AuthUser.CUSTOMER),AppointmentController.updateAppointment);
//gardener side
router.patch('/gardener/update-appointment',auth(AuthUser.GARDENER), AppointmentController.updateAppointmentByDoctor);


export const AppointmentRouter = router;