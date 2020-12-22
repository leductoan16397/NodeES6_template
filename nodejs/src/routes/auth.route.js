import token from '../middleware/jwt.middleware'
import { isAuth } from '../middleware/auth.middleware'
import express from 'express'
const router = express.Router()

router.post("/login", async (req, res) => {
    const userName = req.body.userName.toLowerCase(),
        passWord = req.body.passWord,
        email = req.body.email
    const secretKey = process.env.SECRET_KEY || "leductoan16397",
        accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "10h"
    try {
        const userFakeData = {
            name: userName,
            email: email,
        };
        const accessToken = await token.generateToken(userFakeData, secretKey, accessTokenLife);

        return res.status(200).json({ accessToken });
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.get('/verify', isAuth, async (req, res) => {
    console.log(req.jwtDecoded);
    res.json({ mess: "success" })
})
export default router