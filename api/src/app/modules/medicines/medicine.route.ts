import express from 'express';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';
import { MedicineController } from './medicine.controller';

const router = express.Router();

router.patch('/',auth(AuthUser.GARDENER), MedicineController.updateMedicine);
router.post('/',auth(AuthUser.GARDENER), MedicineController.createMedicine);
router.delete('/:id',auth(AuthUser.GARDENER), MedicineController.deleteMedicine);

export const MedicineRouter = router;