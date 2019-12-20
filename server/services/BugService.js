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
    return data
  }
  async create(body) {
    return await _repository.create(body)
  }
  async update(id, body) {
    let data = await _repository.findOneAndUpdate({ _id: id }, body, {
      new: true
    })
    if (!data) {
      throw new ApiError("Invalid Id", 400)
    }
    return data
  }
  async delete(id) {
    let data = await _repository.findOneAndUpdate({ _id: id }, { closed: true })
    if (!data) {
      throw new ApiError("Invalid Id", 400)
    }
    return data
  }
}

const bugService = new BugService();
export default bugService;
