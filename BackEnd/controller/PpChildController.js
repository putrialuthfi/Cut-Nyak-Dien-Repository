import PpChild from "../models/PpChildModel.js";

export const getPpChilds = async(req, res)=>{
    try {
        const response = await PpChild.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getPpChildById = async(req, res)=>{
    try {
        const response = await PpChild.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createPpChild = async(req, res)=>{
    try {
        await PpChild.create(req.body);
        res.status(201).json({msg: "Photo Profil Telah Diinput"});
    } catch (error){
        console.log(error.message);
    }
}

export const updatePpChild = async(req, res)=>{
    try {
        await PpChild.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Photo Profil Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

export const deletePpChild = async(req, res)=>{
    try {
        await PpChild.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Photo Profil Telah Dihapus"});
    } catch (error){
        console.log(error.message);
    }
}