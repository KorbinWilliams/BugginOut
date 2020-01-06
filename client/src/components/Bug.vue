<template>
  <div class="bug">
    <div class="row">
      <router-link :to="{ name: 'bugDetails', params: { id: bugData.id } }">
        <div class="col-4">{{ bugData.title }}</div>
      </router-link>
      <div class="col-2">{{ bugData.closed }}</div>
      <div class="col-2">{{ bugData.description }}</div>
      <div class="col-2">{{ bugData.reportedBy }}</div>
      <div class="col-2">{{ bugData.closedDate }}</div>
    </div>
    <div class="row separator"></div>
  </div>
</template>

<script>
export default {
  name: "Bug",
  props: ["bugData"],
  computed: {},
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
</style>
