import { Request,Response } from "express";
import mongoose from "mongoose";
export const hashtagHandler = async (req:Request,res:Response):Promise<void> =>{
 const {hashtag} = req.body;
 ///here we have to manage the isntagramApi ans send the Response 
 res.json({message:hashtag}).status(200);
}