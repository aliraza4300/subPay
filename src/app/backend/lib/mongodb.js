// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   console.error("❌ MONGODB_URI is not defined");
//   throw new Error("Please define the MONGODB_URI environment variable in .env.local");
// }

// Global cache to prevent multiple connections
// let cached = global.mongoose || { conn: null, promise: null };

// export async function connectToDatabase() {
//   if (cached.conn) {
//     console.log("✅ Using existing MongoDB connection");
//     return cached.conn;
//   }
// 
//   if (!cached.promise) {
//     console.log("⏳ Connecting to MongoDB...");
//     cached.promise = mongoose.connect(MONGODB_URI, {})
//       .then((mongoose) => {
//         console.log("✅ MongoDB connected");
//         return mongoose;
//       })
//       .catch((err) => {
//         console.error("❌ MongoDB connection error:", err);
//         throw err;
//       });
//   }
// 
//   cached.conn = await cached.promise;
//   global.mongoose = cached;
//   return cached.conn;
// }
