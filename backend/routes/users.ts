import express from 'express';
const router = express.Router();

import dummyData from '../data/dummyData.json';
import User from '../models/User';


router.get('/', (req, res) => {
    res.json(dummyData);
})


router.post('/addUser', async (req, res) => {
    try {
        
        console.log(req.body)

        await User.insertOne(req.body);


        res.status(200).json(req.body)
        return

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
        return
    }
})

export default router;