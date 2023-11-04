<template>
    <div>
        <h1>Edit User</h1>
        <form v-on:submit.prevent="editUser">
            <p>ชื่อ: <input type="text" v-model="user.name"></p>
            <p>นามสกุล: <input type="text" v-model="user.lastname"></p>
            <p>Email: <input type="text" v-model="user.email"></p>
            <p>Password: <input type="text" v-model="user.password"></p>
            <p><button type="submit">ยืนยัน</button>
                <button v-on:click="navigateTo('/books')">ย้อนกลับ</button></p>
        </form>
        <hr>
    </div>
</template>

<script>

import UsersService from '@/services/UsersService'

export default {
  data() {
    return {
      user: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        status: 'active'
      }
    }
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },

    async editUser() {
      try {
        await UsersService.put(this.user)
        this.$router.push({ name: 'users' })
      } catch (err) {
        console.log(err)
      }
    }
  },

  async created() {
    try {
      let userId = this.$route.params.userId
      this.user = (await UsersService.show(userId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped></style>