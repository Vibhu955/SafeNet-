import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import multer from "multer";
import jwt from "jsonwebtoken";
import { verifyToken,verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
const upload = multer();

router.post('/signup', upload.single('profilePic'), async (req, res) => {
    try {
        const { username, password, name, email, confirm  } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password , salt);
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        const newUser = new User({username: username, password: hash, email :email, name: name, });
        if (req.file) {
            const profilePicBuffer = req.file.buffer;
            const profilePicBase64 = profilePicBuffer.toString('base64');
            newUser.profilePic = profilePicBase64;
        }
        await newUser.save();

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error during signup', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username } = req.body;
        
        const existingUser = await User.findOne( {username} );
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }
        const isValidPassword = bcrypt.compareSync(req.body.password, existingUser.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ id: existingUser._id, isAdmin: existingUser.isAdmin }, process.env.JWT); 
  
        const {password, ...rest }=  existingUser._doc;
      return res.status(200).json({token: token, isAdmin: existingUser.isAdmin})
    } catch (error) {
        console.error('Error during signup', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  router.get("/logout", verifyToken, (req, res, next) => {
    res.clearCookie("access_token").json({message : "You are logged out!!!"});
  })

export default router;