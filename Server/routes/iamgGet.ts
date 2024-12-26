import { Router } from "express";
import { imageHandler } from "../controllers/imageHandler";
const router = Router();
router.get('/',imageHandler);
export default router;