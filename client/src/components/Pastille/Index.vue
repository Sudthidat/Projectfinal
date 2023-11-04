<template>
    <div class="background-image">
        <div>
            <br><br>
           
                <div class="head">
                <h1 class="text-center">ร้านหนังสือนายกอล์ฟ</h1>
                <i class="bi bi-book"></i>
            </div>
            <br>
            <div class="subhead d-flex justify-content-between align-items-center mx-3">
                <h2 class="text-left mb-0">ข้อมูลหนังสือทั้งหมด {{ books.length }} เล่ม</h2>
                <button v-on:click="navigateTo('/book/create')" class="btn btn-success text-center">เพิ่มหนังสือ</button>
            </div> <br>
            <div class="container-fluid ">

                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th class="text-center">ID</th>
                            <th class="text-center">ชื่อหนังสือ</th>
                            <th class="text-center">ชื่อผู้แต่ง</th>
                            <th class="text-center">ราคา(บาท)</th>
                            <th class="text-center col-md-3">ตัวเลือก</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in books" v-bind:key="book.id">
                            <td class="align-middle">{{ book.id }}</td>
                            <td class="align-middle">{{ book.Title }}</td>
                            <td class="align-middle">{{ book.Author }}</td>
                            <td class="align-middle">{{ book.Price }}</td>
                            <td>
                                <button v-on:click="navigateTo('/book/' + book.id)"
                                    class="btn btn-primary text-center">ดูข้อมูลหนังสือ</button>
                                <button v-on:click="navigateTo('/book/edit/' + book.id)"
                                    class="btn btn-warning text-center">แก้ไขข้อมูล</button>
                                <button v-on:click="deleteBook(book)" class="btn btn-danger text-center">ลบข้อมูล</button>

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</template>

<script>

import BookService from '@/services/BookService'

export default {
    data() {
        return {
            books: []
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },

    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteBook(book) {
            let result = confirm("ยืนยันที่จะลบข้อมูล?")
            if (result) {
                try {
                    await BookService.delete(book)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.books = (await BookService.index()).data
        }
    },
    async created() {
        this.books = (await BookService.index()).data
    }
}
</script>

<style scoped>
.background-image {
    text-align: center;
    background-image: url('~@/pic/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}
.head {
    display: flex;
    justify-content: center;
    align-items: center;
}

.subhead {
    text-align: left;
}

.container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>