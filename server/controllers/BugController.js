import express from "express";
import bugService from "../services/BugService";
import noteService from "../services/NoteService"

export default class BugController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/notes", this.getNotesByBugId)
      .post("", this.create)
      .put("/:id", this.update)
      .delete("/:id", this.delete)
    // don't forget delete is going to be a soft delete
  }

  async getAll(req, res, next) {
    try {
      let data = await bugService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(res, req, next) {
    try {
      let data = await bugService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }


  async getNotesByBugId(res, req, next) {
    try {
      let data = await noteService.getNotesByBugId(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(res, req, next) {
    try {
      let data = await bugService.create(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async update(res, req, next) {
    try {
      let data = await bugService.update(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(res, req, next) {
    try {
      await bugService.delete(req.params.id, req.body)
    } catch (error) {
      next(error)
    }
  }
}
