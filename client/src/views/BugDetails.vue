<template>
  <div class="bug-details container-fluid">
    <nav-component />
    <div class="row">
      <div class="col-12">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavComponent from "@/components/Nav.vue";

export default {
  name: "BugDetails",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id),
      this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  components: {
    NavComponent
  }
};
</script>

<style>
</style>