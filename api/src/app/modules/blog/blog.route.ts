import express, { NextFunction, Request, Response } from 'express';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';
import { BlogController } from './blog.controller';
import { CloudinaryHelper } from '../../../helpers/uploadHelper';

const router = express.Router();
router.post('/',
    auth(AuthUser.GARDENER),
    CloudinaryHelper.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        return BlogController.createBlog(req, res, next);
    });
router.get('/', BlogController.getAllBlogs);
router.get('/:id', BlogController.getBlog);
router.delete('/:id', auth(AuthUser.GARDENER, AuthUser.SUPER_ADMIN), BlogController.deleteBlog);
router.patch('/:id',
    CloudinaryHelper.upload.single('file'),
    auth(AuthUser.GARDENER),
    (req: Request, res: Response, next: NextFunction) => {
        return BlogController.updateBlog(req, res, next);
    }
)

export const BlogRoutes = router;