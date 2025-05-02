import express from 'express'
import { AcademicSemisTarControllers } from './AcademicSemistar.controllers';

const router=express.Router();

router.post('/create-academic-semistar',AcademicSemisTarControllers.CreateAcaDemicSemistarControllers)

// get all 
router.get("/",AcademicSemisTarControllers.getAllAcademicSemisatrtControllers);

// get single 
router.get(
  "/:semesterId", AcademicSemisTarControllers.getASingleAcademicSemistarControllers);

// update
router.patch(
  "/:semistarId",AcademicSemisTarControllers.UpdateAcademicSemistarControllers)



export const AcademicsemistarRoute=router;