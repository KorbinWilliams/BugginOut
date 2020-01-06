<template>
  <div class="home container-fluid">
    <div>
      <nav-component />
    </div>
    <div class="row">
      <div class="col-2">
        <p>Title</p>
      </div>
      <div class="col-2">
        <p>closed</p>
      </div>
      <div class="col-2">
        <p>description</p>
      </div>
      <div class="col-2">
        <p>reported by</p>
      </div>
      <div class="col-2">
        <p>updated at</p>
      </div>
    </div>
    <div class="row separator"></div>
    <div class="row bugs">
      <div class="col-12" v-for="bug in bugs" :key="bug.id">
        <bug-component :bugData="bug" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h1></h1>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import BugComponent from "@/components/Bug.vue";
import NavComponent from "@/components/Nav.vue";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBugs");
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  components: {
    NavComponent,
    BugComponent
  }
};
</script>

<style>
h1 img {
  transform: rotate(180deg);
  height: 1em;
}
.separator {
  height: 1em;
  width: 100%;
  background-color: black;
}
</style>

