import express from 'express'
import { UserControllers } from './user.controllers';

const router=express.Router();

// router.post('/create-student',UserControllers.createStudentControllers)

router.post('/create-student',UserControllers.createStudentControllers)

export const UserRouter=router;
