import express from 'express';
import { ReviewController } from './reviews.controller';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';

const router = express.Router();
router.get('/gardener-review/:id', auth(AuthUser.GARDENER, AuthUser.CUSTOMER), ReviewController.getDoctorReviews);
router.get('/:id', ReviewController.getSingleReview);
router.post('/', auth(AuthUser.CUSTOMER), ReviewController.creatReview);
router.get('/', ReviewController.getAllReview);
router.delete('/:id', auth(AuthUser.ADMIN), ReviewController.deleteReview);
router.patch('/:id/reply', auth(AuthUser.GARDENER), ReviewController.replyReviewByDoctor);
router.patch('/:id', auth(AuthUser.ADMIN), ReviewController.updateReview);

export const ReviewRouter = router;