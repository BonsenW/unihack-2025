import express from 'express';
const router = express.Router();
import { flow } from '../langflow';
import { mdb } from '../mongo';
import User from '../models/User';


// get all users in the collection
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        console.log(users)
        res.status(200).json(users)
        return

    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
    }
})

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

router.put('/updateUser/:userId', async (req, res) => {
    try {
        const userId = Number(req.params.userId)
        const updateData = req.body

        const updatedUser = await User.findOneAndUpdate(
            { userId: userId },
            { $set: updateData },
            { new: true }
        )

        if (!updatedUser) {
            res.status(404).json({error: "User not found"})
            return
        }

        res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error)
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


router.get('/match/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const response = await flow.run(userId);

        const responseText = response.chatOutputText()

        const jsonMatch = responseText.match(/\{[\s\S]*\}/);

        const jsonData = JSON.parse(jsonMatch[0])

        console.log(response.chatOutputText())
        console.log(jsonData)
        res.status(200).json(jsonData)
        return
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
        return
    }
})

router.get('/match/userData/:userId', async (req, res) => {
    try {
        console.log("matching....")
        const userId = req.params.userId;
        const response = await flow.run(userId);

        const responseText = response.chatOutputText()
        console.log("/match/userData/:userId data", responseText)

        const jsonMatch = responseText.match(/\{[\s\S]*\}/);

        if (!jsonMatch) {
            res.status(400).json({error: "Invalid response format/AI model didnt produce proper format"})
        }


        const jsonData = JSON.parse(jsonMatch[0])

        console.log(jsonData)

        const users = await User.find({ userId: { $in: jsonData.userId } })

        res.status(200).json(users)
        return
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
        return
    }
})

export default router