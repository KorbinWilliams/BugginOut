<template>
  <div class="bug">
    <router-link :to="{ name: 'bugDetails', params: { id: bugData.id } }">
      <div class="row">
        <div class="col-2">{{ bugData.title }}</div>
        <div class="col-2">{{ bugData.closed }}</div>
        <div class="col-2">{{ bugData.description }}</div>
        <div class="col-2">{{ bugData.reportedBy }}</div>
        <div class="col-2">{{ bugData.closedDate }}</div>
      </div>
    </router-link>
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
</style>
