import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import students from "./routes/student.js";
const app = express();

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors());
app.use("/students", students);


const CONNECTION_URL = 'mongodb+srv://school:school@cluster0.ml4df.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true, useUnifiedTopology: true
}).then(()=>{
    app.listen(port,()=>{
        console.log(`connection is stablished and running on port: ${port}`);
    })
}).catch((err)=>{
    console.log(`ERROR in connection mongodb: ${err.message}`)
})

//mongoose.set('useFindAndModify', false); this command is in the lecture but here throws an error

