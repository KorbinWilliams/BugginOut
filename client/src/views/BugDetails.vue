<template>
  <div class="home container-fluid">
    <nav-component />
    <div class="row">
      <div class="col">
        <bugs-component />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link to="/">
          <h1>You are now here!</h1>
        </router-link>
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
  // data() {},
  mounted() {},
  computed: {},
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