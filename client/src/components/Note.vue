<template>
  <div class="note">
    <div class="col">
      <p>{{ noteData.content }}</p>
    </div>
    <div class="col">
      <p>{{noteData.reportedBy}}</p>
    </div>
    <div class="col">
      <button @click="deleteNote">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: ["noteData"],
  methods: {
    deleteNote() {
      this.$store.dispatch("deleteNote", this.noteData.id, this.noteData.bug);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>