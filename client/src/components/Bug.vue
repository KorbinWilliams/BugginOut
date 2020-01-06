<template>
  <div class="bug">
    <div class="row">
      <router-link :to="{ name: 'bugDetails', params: { id: bugData.id } }">
        <div class="col-2">{{ bugData.title }}</div>
      </router-link>
      <div class="col-2 blue-text" :class="{'red-text':bugData.closed}">{{ bugData.closed }}</div>
      <div class="col-2">{{ bugData.description }}</div>
      <div class="col-2">{{ bugData.reportedBy }}</div>
      <div class="col-2">{{ shortenDate }}</div>
    </div>
    <div class="row separator"></div>
  </div>
</template>

<script>
export default {
  name: "Bug",
  props: ["bugData"],
  computed: {
    shortenDate() {
      return this.bugData.updatedAt.substr(0, 10);
    }
  },
  components: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.separator {
  height: 1em;
  width: 100%;
  background-color: black;
}
.bg-black {
  background-color: cornflowerblue;
}
.blue-text {
  color: blue;
}
.red-text {
  color: red;
}
</style>

