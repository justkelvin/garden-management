import express from 'express';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';
import { FavouriteController } from './favourites.controller';

const router = express.Router();

router.get('/',auth(AuthUser.CUSTOMER), FavouriteController.getPatientFavourites);
router.post('/add',auth(AuthUser.CUSTOMER), FavouriteController.addFavourite);
router.post('/remove',auth(AuthUser.CUSTOMER), FavouriteController.removeFavourite);

export const FavouriteRouter = router;