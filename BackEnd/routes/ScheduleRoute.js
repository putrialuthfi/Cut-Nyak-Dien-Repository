import express from "express";
import {getSchedules, 
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteSchedule,
} from "../controller/ScheduleController.js"

const router = express.Router();

router.get('/schedules', getSchedules);
router.get('/schedules/:id', getScheduleById);
router.post('/schedules', createSchedule);
router.patch('/schedules/:id', updateSchedule);
router.delete('/schedules/:id', deleteSchedule);

export default router;