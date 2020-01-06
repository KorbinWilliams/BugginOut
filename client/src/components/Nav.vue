<template>
  <div class="nav">
    <div class="row">
      <div class="col-4">
        <router-link to="/">
          <button>Home</button>
        </router-link>
      </div>
      <div class="col-8 justify-content-center">
        <h1>Bug Zapper</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="createBug">
          <input required type="text" v-model="newBug.title" placeholder="title" />
          <input required type="text" v-model="newBug.description" placeholder="description" />
          <input required type="text" v-model="newBug.reportedBy" placeholder="user" />
          <button class="btn btn-success" @click="createBug">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      newBug: {
        closed: false,
        title: "",
        description: "",
        reportedBy: "",
        closedDate: Date
      }
    };
  },
  methods: {
    createBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        closed: false,
        title: "",
        description: "",
        reportedBy: "",
        closedDate: Date
      };
    }
  },
  computed: {},
  components: {}
};
</script> 

<style scoped>
</style>

