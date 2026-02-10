const mongoose = require("mongoose"); 
const express = require('express');
const connectDb = async() =>{

        try {
             const conn = await mongoose.connect("mongodb://localhost:27017")
            console.log("db connected successful");
            
        } catch (error) {
            console.log('Unwanted error');
        }
}

module.exports = connectDb;