import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MongoDb dtabase Error ${error}`.bgRed.white);
  }
};
export default connectDB;
