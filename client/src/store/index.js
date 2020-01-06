import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

let _api = axios.create({
  baseURL: "//localhost:3000/api"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: [],
    activeNotes: []
  },
  mutations: {
    setAllBugs(state, data) {
      state.bugs = data
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    },
    addBug(state, bug) {
      state.bugs.push(bug)
    },
    setAllNotes(state, data) {
      state.notes = data
    },
    setActiveNotes(state, notes) {
      state.activeNotes = notes
    },
    addActiveNote(state, note) {
      state.notes.push(note)
    },
    clearActiveNotes(state) {
      state.activeNotes = []
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _api.get("bugs")
      commit("setAllBugs", res.data)
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id)
      commit("setActiveBug", res.data)
    },
    async createBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug)
      commit("addBug", res.data)
      commit("setActiveBug", res.data)
    },
    async closeBug({ commit, dispatch }, id) {
      await _api.delete("bugs/" + id)
      dispatch("getBugs")
      dispatch("getBugById", id)
    },
    async editBug({ commit, dispatch }, id, bug) {
      let res = await _api.put("bugs/" + id, bug);
      dispatch("getBugById", id);
    },
    async getNotes({ commit, dispatch }) {
      let res = await _api.get("")
      commit("setAllNotes", res.data)
    },
    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes")
      commit("setActiveNotes", res.data)
    },
    async createNote({ commit, dispatch }, note) {
      let res = await _api.post("notes", note)
      commit("addActiveNote", note)
    },
    async deleteNote({ commit, dispatch }, id, bugId) {
      await _api.delete("notes/" + id)
      dispatch("getNotesByBugId", bugId)
    },
    clearActiveNotes({ commit, dispatch }) {
      commit("clearActiveNotes")
    }
  },
  modules: {
  }
})
