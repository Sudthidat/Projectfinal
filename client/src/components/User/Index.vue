<template>
    <div>

        <h2>Get all users</h2>
        <h4>จํานวนผู้ใช้งาน {{ users.length }}</h4>
        <hr>
        <div v-for="user in users" v-bind:key="user.id">
            <p>ID : {{ user.id }}</p>
            <p>ชื่อ : {{ user.name }} </p>
            <p>นามสกุล : {{ user.lastname }}</p>
            <p>
                <button v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลผู้ใช้</button>
                <button v-on:click="navigateTo('/user/edit/' + user.id)">edit user</button>
                <button v-on:click="deleteUser(user)">delete user</button>

            </p>
            <hr>
        </div>

    </div>
</template>

<script>

import UsersService from '@/services/UsersService'

export default {
    data() {
        return {
            users: []
        }
    },

    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async deleteBook(book) {
            let result = confirm("Want to delete?");
            if (result) {
                try {
                    await BookService.delete(book);
                    this.refreshData();
                } catch (err) {
                    console.log(err);
                }
            }
        },

        async refreshData() {
            this.users = (await UsersService.index()).data
        }
    },

    async created() {
        this.users = (await UsersService.index()).data
    }

}

</script>

<style scoped></style>
   