<template>
  <div class="nav bg-blue">
    <div class="row">
      <div class="col-4">
        <router-link to="/">
          <button @click="clearActiveNotes">Home</button>
        </router-link>
      </div>
      <div class="col-8 justify-content-center">
        <h1>Bug Zapper</h1>
        <img
          class="resizeImg"
          src="https://images-na.ssl-images-amazon.com/images/I/51OQImmyexL._SL1068_.jpg"
          alt="lightning"
        />
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
    },
    clearActiveNotes() {
      this.$store.dispatch("clearActiveNotes");
    }
  },
  computed: {},
  components: {}
};
</script> 

<style scoped>
.resizeImg {
  height: 60px;
  width: 60px;
}

.bg-blue {
  background-color: aqua;
}
</style>

