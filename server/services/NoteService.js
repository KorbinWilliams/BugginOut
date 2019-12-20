import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError"

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findById(id)
    if (!data) {
      throw new ApiError("Invalid Id", 400);
    }
  }

  async getNotesByBugId(bug) {
    return await _repository.find({ bug })
  }

  async create(body) {
    let data = await _repository.create(body)
    return data
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
  async delete(id, body) {
    let data = await _repository.findOneAndUpdate({ _id: id }, { closed: true })
    if (!data) {
      throw new ApiError("Invalid Id", 400)
    }
    return data
  }
}

const noteService = new NoteService();
export default noteService;
