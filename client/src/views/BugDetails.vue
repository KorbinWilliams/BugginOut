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
.bg1 {
  background-image: url(https://image.shutterstock.com/image-vector/insects-linear-pattern-vector-seamless-260nw-329207057.jpg);
}

.popout {
  color: darkred;
}
</style>