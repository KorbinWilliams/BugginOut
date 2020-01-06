<template>
  <div class="note">
    <div class="col">
      <p>{{ noteData.content }}</p>
    </div>
    <div class="col">
      <p>{{noteData.reportedBy}}</p>
    </div>
    <div class="col">
      <button @click="deleteConfirm">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: ["noteData"],
  methods: {
    deleteConfirm() {
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this file!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          deleteNote();
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success"
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    },
    deleteNote() {
      this.$store.dispatch("deleteNote", this.noteData.id, this.noteData.bug);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your imaginary file is safe!");
  }
});