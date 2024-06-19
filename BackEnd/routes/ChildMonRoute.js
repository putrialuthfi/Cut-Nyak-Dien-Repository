import express from "express";
import {getChildMons, 
    getChildMonById,
    createChildMon,
    updateChildMon,
    deleteChildMon,
} from "../controller/ChildMonController.js"

const router = express.Router();

router.get('/childmons', getChildMons);
router.get('/childmons/:id', getChildMonById);
router.post('/childmons', createChildMon);
router.patch('/childmons/:id', updateChildMon);
router.delete('/childmons/:id', deleteChildMon);

export default router;