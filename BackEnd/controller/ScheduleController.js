import Schedule from "../models/ScheduleModel.js";

export const getSchedules = async(req, res)=>{
    try {
        const response = await Schedule.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getScheduleById = async(req, res)=>{
    try {
        const response = await Schedule.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createSchedule = async(req, res)=>{
    try {
        await Schedule.create(req.body);
        res.status(201).json({msg: "Info Jadwal Telah Dibuat"});
    } catch (error){
        console.log(error.message);
    }
}

export const updateSchedule = async(req, res)=>{
    try {
        await Schedule.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Info Jadwal Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

export const deleteSchedule = async(req, res)=>{
    try {
        await Schedule.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Info Jadwal Telah Dihapus"});
    } catch (error){
        console.log(error.message);
    }
}