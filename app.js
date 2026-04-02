import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/mongo.js";
dotenv.config();
connectDB();
