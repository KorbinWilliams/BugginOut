<template>
  <div class="home container-fluid">
    <div>
      <nav-component />
    </div>
    <div class="row bugs">
      <div class="col-4" v-for="bug in bugs" :key="bug.id">
        <bug-component :bugData="bug" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h1>
          <router-link to="/bugdetails">Hello World</router-link>
        </h1>
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
      return this.$store.state.jobs;
    }
  },
  components: {
    BugComponent,
    NavComponent
  }
};
</script>

<style>
h1 img {
  transform: rotate(180deg);
  height: 1em;
}
</style>

