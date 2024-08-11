
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();



// Connect to MongoDB


// Define a storage strategy for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Appends file extension
    }
});

const upload = multer({ storage });

// Define a schema for storing file metadata
const FileSchema = new mongoose.Schema({
    filename: String,
    path: String,
    size: Number,
    createdAt: { type: Date, default: Date.now }
});

const File = mongoose.model('File', FileSchema);

// Endpoint for file upload
// exports.video ('/upload', upload.single('file'), async (req, res) => {
    // try {
    //     const file = new File({
    //         filename: req.file.filename,
    //         path: req.file.path,
    //         size: req.file.size
    //     });

    //     await file.save();
    //     res.status(201).json({ message: 'File uploaded successfully', file });
    // } catch (error) {
    //     res.status(500).json({ message: 'Error uploading file', error });
    // }
// });

// Endpoint to serve uploaded files
// app.get('/files/:filename', async (req, res) => {
//     try {
//         const file = await File.findOne({ filename: req.params.filename });

//         if (!file) {
//             return res.status(404).json({ message: 'File not found' });
//         }

//         res.sendFile(path.resolve(__dirname, file.path));
//     } catch (error) {
//         res.status(500).json({ message: 'Error retrieving file', error });
//     }
// });

// Start the server


exports.video = async (req, res) => {
    res.send("usedasta")
  };
  

