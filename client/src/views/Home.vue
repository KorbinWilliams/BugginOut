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

