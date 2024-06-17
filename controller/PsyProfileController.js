import PsyProfile from "../models/PsyProfileModel.js";

export const getPsyProfiles = async(req, res)=>{
    try {
        const response = await PsyProfile.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getPsyProfileById = async(req, res)=>{
    try {
        const response = await PsyProfile.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createPsyProfile = async(req, res)=>{
    try {
        await PsyProfile.create(req.body);
        res.status(201).json({msg: "Info Jadwal Telah Dibuat"});
    } catch (error){
        console.log(error.message);
    }
}

export const updatePsyProfile = async(req, res)=>{
    try {
        await PsyProfile.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Info Jadwal Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

export const deletePsyProfile = async(req, res)=>{
    try {
        await PsyProfile.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Info Jadwal Telah Dihapus"});
    } catch (error){
        console.log(error.message);
    }
}