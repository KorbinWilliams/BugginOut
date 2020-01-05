<template>
  <div class="home container-fluid">
    <nav-component />
    <div class="row">
      <div class="col">
        <bugs-component />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Bugs from "@/components/Bugs.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "home",
  data: {},
  mounted: {},
  computed: {},
  components: {
    Bugs,
    Nav
  }
};
</script>

<style>
h1 img {
  transform: rotate(180deg);
  height: 1em;
}
</style>

