import mongoose from "mongoose";

export const connectDB = async ()=> {
  await mongoose.connect("mongodb+srv://descentayush2003_db_user:vASiR2EUEWiKmsBj@cluster0.nllbgsw.mongodb.net/MediCare")
  .then(() => {console.log("DB connected")})
}


