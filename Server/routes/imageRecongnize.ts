import express,{Router} from 'express'
import { imageRecongnizeHandler } from '../controllers/imageRecognizeController';

const route:Router = express.Router();
route.post('/',imageRecongnizeHandler);
export default route;