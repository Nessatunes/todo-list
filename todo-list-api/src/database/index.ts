import mongoose from "mongoose";

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    mongoose
      .connect("mongodb://localhost:27017/todo-list")
      .then(() => {
        console.log("✅ Mongodb connnected ");
      })
      .catch((err) => {
        console.log("Error:" + err);
      });
  }
}
export default new Database();
