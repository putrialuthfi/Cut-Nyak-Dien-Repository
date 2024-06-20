import express from "express";
import {getPsyProfiles, 
    getPsyProfileById,
    createPsyProfile,
    updatePsyProfile,
    deletePsyProfile,
} from "../controller/PsyProfileController.js"

const router = express.Router();

router.get('/psyprofiles', getPsyProfiles);
router.get('/psyprofiles/:id', getPsyProfileById);
router.post('/psyprofiles', createPsyProfile);
router.patch('/psyprofiles/:id', updatePsyProfile);
router.delete('/psyprofiles/:id', deletePsyProfile);

export default router;