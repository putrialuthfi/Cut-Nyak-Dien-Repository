import express from "express";
import {getPpChilds, 
    getPpChildById,
    createPpChild,
    updatePpChild,
    deletePpChild,
} from "../controller/PpChildController.js"

const router = express.Router();

router.get('/ppchilds', getPpChilds);
router.get('/ppchilds/:id', getPpChildById);
router.post('/ppchilds', createPpChild);
router.patch('/ppchilds/:id', updatePpChild);
router.delete('/ppchilds/:id', deletePpChild);

export default router;