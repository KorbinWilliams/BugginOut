<template>
  <div class="nav">
    <div class="row">
      <div class="col-2">
        <!-- home button  -->
      </div>
      <div class="col-8">
        <h1>
          Bug Z
          <img src="../assets/logo.png" alt="logo" />pper
        </h1>
      </div>
      <div class="col-2">
        
      </div>
    </div>
    <modal-component v-show="showModal" />
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  name: "Nav",
  data: {
    showModal: false
  },
  mounted: {},
  methods: {
    createBug() {
      let bug = { ...this.newBug };
    }
  },
  computed: {},
  components: {
    Modal
  }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

