import express from 'express'
import { StudentControllers } from './student.controllers';

const router=express.Router();
router.post('/create-student',StudentControllers.createStudentControllers);
router.get('/',StudentControllers.getAllStudentControllers)

export const StudentRoutes=router;
