import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/mongo.js";
import bookRoutes from "./routers/bookrouter.js";
import authorRoutes from "./routers/authorrouter.js";
import librarianRoutes from "./routers/librarianrouter.js";
import studentRoutes from "./routers/studentrouter.js";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(authorRoutes);
app.use(bookRoutes);
app.use(studentRoutes);
app.use(librarianRoutes);
app.listen(9000, () => {
  console.log("server is up and running at port 9000");
});
