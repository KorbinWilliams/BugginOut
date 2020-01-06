<template>
  <div class="bug">
    <router-link :to="{ name: 'bugDetails', params: { id: bugData.id } }">
      <p>{{ bugData.Title }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Bug",
  props: ["bugData"],
  computed: {
    bugs() {
      return this.bugData;
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
