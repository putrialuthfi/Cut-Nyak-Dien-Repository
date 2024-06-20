import express from "express";
import {getStuntings, 
    getStuntingById,
    createStunting,
    updateStunting,
    deleteStunting,
} from "../controller/StuntingController.js"

const router = express.Router();

router.get('/stuntings', getStuntings);
router.get('/stuntings/:id', getStuntingById);
router.post('/stuntings', createStunting);
router.patch('/stuntings/:id', updateStunting);
router.delete('/stuntings/:id', deleteStunting);

export default router;