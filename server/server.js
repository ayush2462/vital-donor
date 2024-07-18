import express from "express";
import testRoutes from "./routes/testRoutes.js";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

//dotenv config
dotenv.config();
//mongodb connection
connectDB();
//rest object

const app = express();
//middlewares
app.use(express.json());
app.use(cors(
  {
    origin:[],
    methods: ["POST","GET"],
    credentials:true
  }
));
app.use(morgan("dev"));
//routes
app.use("/api/v1/", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/inventory", inventoryRoutes);
app.use("/api/v1/analytics", analyticsRoutes);
app.use("/api/v1/admin", adminRoutes);


//port
const PORT = process.env.PORT || 8080;

//listen run

app.listen(PORT, () => {
  console.log(
    `Node Server Running in ${process.env.DEV_MODE} Mode on Port ${process.env.PORT}`
      .bgBlue.white
  );
});
