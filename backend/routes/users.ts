import express from 'express';
const router = express.Router();
import { flow } from '../langflow';
import { mdb } from '../mongo';
import User from '../models/user';

import dummyData from '../data/dummyData.json';

router.post('/addUser', async (req, res) => {
    try {

        // ! THIS IS SUPER DUPER MEGA SCUFFED LOL
        const maxUIdUser = await User.findOne().sort({ userId: -1 });
        console.log(maxUIdUser)
        if (maxUIdUser) {
            const greatestUserId = maxUIdUser.userId + 1
            const userInsert = {userId: greatestUserId, ...req.body}
            await User.insertOne(userInsert)
        }
        else {
            const userInsert = {userId: 1, ...req.body}
            await User.insertOne(userInsert)
        }

        // await User.insertOne(req.body);
        res.status(200).json(req.body);
        return
    } catch (error) {
        console.log("error inserting user", error)
        res.status(500).json({error: error})
    }
})

// get a single user's data
router.get('/:userId', async (req, res) => {
    try {
        const userId = Number(req.params.userId)
        const data = mdb.collection('users')
        const userData = await data.findOne({userId: userId})

        if (userData) {
            userData.userId = userData.userId.toString();
        }
        else {
            res.status(404).json({error: "Requested user not found"})
        }
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