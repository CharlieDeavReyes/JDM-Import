// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());


// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });
// import express from "express"
// import cors from "cors"
// import carinventory from "./api/carinventory.js"

// const app = express()

// app.use(cors())
// app.use(express.json())

// app.use("/api/v1/carinventory", carinventory)
// app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

// export default app