import { Request,Response } from "express";
import mongoose from "mongoose";
export const imageRecongnizeHandler = async (req:Request,res:Response):Promise<void> =>{
 const {image} = req.body;
 ///here we have to manage the isntagramApi ans send the Response 
 res.json({message:image}).status(200);
}