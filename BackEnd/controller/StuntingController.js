// const Stunting = require("../models/StuntingModel.js");
import Stunting from "../models/StuntingModel.js";
// import database from '../config/database.js';


export const getStuntings = async(req, res)=>{
    try {
        const response = await Stunting.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getStuntingById = async(req, res)=>{
    try {
        const response = await Stunting.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createStunting = async(req, res)=>{
    try {
        await Stunting.create(req.body);
        res.status(201).json({msg: "Data Stunting Detection Telah Diinput"});
    } catch (error){
        console.log(error.message);
    }
}

export const updateStunting = async(req, res)=>{
    try {
        await Stunting.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Stunting Detection Telah Diupdate"});
    } catch (error){
        console.log(error.message);
    }
}

export const deleteStunting = async(req, res)=>{
    try {
        await Stunting.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Stunting Detection Telah Dihapus"});
    } catch (error){
        console.log(error.message);
    }
}