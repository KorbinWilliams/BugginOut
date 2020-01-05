<template>
  <div class="bugs">
    <div class="row">
      <div class="col">{{ bugs }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bugs",
  data() {},
  mounted() {
    this.$store.dispatch("getBugs");
  },
  methods: {
    getBugById() {}
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
