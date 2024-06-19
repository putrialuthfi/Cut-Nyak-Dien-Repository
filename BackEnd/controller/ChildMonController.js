import ChildMon from "../models/ChildMonModel.js";

export const getChildMons = async(req, res)=>{
    try {
        const response = await ChildMon.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getChildMonById = async(req, res)=>{
    try {
        const response = await ChildMon.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createChildMon = async(req, res)=>{
    try {
        await ChildMon.create(req.body);
        res.status(201).json({msg: "Data Child Monitoring Telah Dibuat"});
    } catch (error){
        console.log(error.message);
    }
}

export const updateChildMon = async(req, res)=>{
    try {
        await ChildMon.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Child Monitoring Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

export const deleteChildMon = async(req, res)=>{
    try {
        await ChildMon.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Child Monitoring telah dihapus"});
    } catch (error){
        console.log(error.message);
    }
}