import express from "express";
import path from "path";
import multer from "multer";
import { verifyToken } from "../utils/verifyToken.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/check", verifyToken, (req, res, next) => {
    res.json({message : "Congo you are logged in!!!"});
  })

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.put('/upload/:id', verifyToken, async (req, res) => {
    try {
        const userId = req.params.id;
        upload.single('image')(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Internal server error" });
            }
            if (!req.file) {
                return res.status(400).json({ message: "No file provided" });
            }
            const user = await User.findByIdAndUpdate(
                userId,
                { $set: { imagePath: req.file.path } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({ message: 'File uploaded and user updated successfully', user });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
