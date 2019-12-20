import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError"

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findById(id)
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
  }
  async create(body) {
    throw new Error("Method not implemented.");
  }
  async update(id, body) {
    throw new Error("Method not implemented.");
  }
  async delete(id, body) {
    throw new Error("Method not implemented.");
  }
}

const bugService = new BugService();
export default bugService;
