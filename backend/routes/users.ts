import express from 'express';
const router = express.Router();
import { flow } from '../langflow';
import { mdb } from '../mongo';

import dummyData from '../data/dummyData.json';

// get a single user's data
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId
        const data = mdb.collection('users')
        const userData = await data.findOne({userId: userId})
        console.log(userData)
        res.status(200).json(userData)
        return
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
        return
    }
})


router.post('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const response = await flow.run(userId);

        console.log(response.outputs)
        res.status(200).json({output: response.outputs})
        return
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
        return
    }
})


export default router