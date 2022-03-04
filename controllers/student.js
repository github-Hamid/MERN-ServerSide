import student from "../models/student.js";

export const getStudents = async (req, res)=>{
    try {
       const allStudents = await student.find();
       res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
  
};

export const createStudent = async (req, res) => {
    const addStudent = req.body;
    console.log("new: ", req.body);
    const newStudent = new student(addStudent);
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
    
}

export const deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        await student.deleteOne({registrationNumber : id}).exec();
        res.status(202).json();
    } catch (error) {
        res.staus(409).json({message : err})
    }
  
}


