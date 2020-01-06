<template>
  <div class="bug-details container-fluid">
    <nav-component />
    <div class="row">
      <div class="col-12">
        <h1>{{bug.title}}</h1>
        <h4>Author:{{bug.reportedBy}}</h4>
      </div>
    </div>
    <div class="row">
      <div class="col bg1">
        <p class="popout">{{bug.description}}</p>
      </div>
    </div>
    <div class="separator"></div>
    <div class="row">
      <div class="col">
        <form @submit.prevent="createNote">
          <input required type="text" v-model="newNote.content" placeholder="title" />
          <input required type="text" v-model="newNote.reportedBy" placeholder="user" />
          <button class="btn btn-success" @click="createNote">Submit</button>
        </form>
      </div>
    </div>
    <div class="row notes" v-for="note in notes" :key="note.id">
      <note-component :noteData="note" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavComponent from "@/components/Nav.vue";
import NoteComponent from "../components/Note.vue";

export default {
  name: "BugDetails",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id),
      this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  data() {
    return {
      newNote: {
        content: "",
        reportedBy: "",
        bug: this.$route.params.id
      },
      editedBug: {
        title: "",
        reportedBy: "",
        description: "",
        id: this.$route.params.id
      }
    };
  },
  methods: {
    createNote() {
      let note = { ...this.newNote };
      this.$store.dispatch("createNote", note);
      this.newNote = {
        content: "",
        reportedBy: "",
        bug: this.$route.params.id
      };
    },
    editBug() {
      let editedBug = { ...this.editedBug };
      this.$store.dispatch("editBug", editedBug);
      this.editedBug = {};
    }
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.activeNotes;
    }
  },
  components: {
    NavComponent,
    NoteComponent
  }
};
</script>

<style>
.bg1 {
  background-image: url(https://image.shutterstock.com/image-vector/insects-linear-pattern-vector-seamless-260nw-329207057.jpg);
}

.popout {
  color: darkred;
}

.separator {
  height: 1em;
  width: 100%;
  background-color: black;
}
</style>