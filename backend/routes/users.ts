import express from 'express';
const router = express.Router();
import { flow } from '../langflow';

import dummyData from '../data/dummyData.json';


router.post('/', async (req, res) => {
    try {
        const response = await flow.run("6");
        console.log(response.chatOutputText())
        res.status(200).json({message: "success"})
        return
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
        return
    }
})


export default router