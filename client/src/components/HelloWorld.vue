<template>
  <div class="background-image">
    <div class="container-fluid">

      <div class="text text-center">
        <p class="display-4" style="color: #black;">ร้านหนังสือนายกอล์ฟ</p>
        <button class="btn btn-primary" v-on:click="navigateTo('/books')">เข้าสู่เว็บไซต์</button>
      </div>

    </div>
  </div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
 
<style scoped>
.background-image {
  text-align: center;
  background-image: url('~@/pic/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: auto;
  /* background-color: black; */
  height: 100%;
}

.text {
  font-size: 24px;
}
</style>
 