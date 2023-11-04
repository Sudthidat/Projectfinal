<template>
    <div class="background-image">
        <div class="container-fluid">
            <br>
            <div class="container">
                <h1 class="mt-5">เพิ่มข้อมูลหนังสือ</h1><br>
                <form v-on:submit.prevent="createBook" class="form">
                    <center>

                        <p class="form-group col-md-4">
                            <label for="title">ชื่อหนังสือ</label>
                            <input type="text" v-model="book.Title" class="form-control" id="title">
                        </p>
                        <p class="form-group col-md-4">
                            <label for="author">ชื่อผู้แต่ง</label>
                            <input type="text" v-model="book.Author" class="form-control" id="author">
                        </p>
                        <p class="form-group col-md-4">
                            <label for="format">สำนักพิมพ์</label>
                            <input type="text" v-model="book.Publisher" class="form-control" id="format">
                        </p>
                        <p class="form-group col-md-4">
                            <label for="genre">ปีที่พิมพ์</label>
                            <input type="text" v-model="book.PublicationYear" class="form-control" id="genre">
                        </p>
                        <p class="form-group col-md-4">
                            <label for="price">หมวดหมู่</label>
                            <input type="text" v-model="book.Genre" class="form-control" id="price">
                        </p>
                        <p class="form-group col-md-4">
                            <label for="price">ภาษา</label>
                            <input type="text" v-model="book.Language" class="form-control" id="price">
                        </p>
                        <p class="form-group col-md-4">
                            <label for="price">ราคา(บาท)</label>
                            <input type="text" v-model="book.Price" class="form-control" id="price">
                        </p>
                        <p>
                            <button type="submit" class="btn btn-primary float-right">ยืนยัน</button>
                            <button v-on:click="navigateTo('/books')" class="btn btn-primary float-right">ย้อนกลับ</button>
                        </p>
                    </center>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

import BookService from '@/services/BookService'
export default {
    data() {
        return {

            book: {
                Title: "",
                Author: "",
                Publisher: "",
                PublicationYear: "",
                Genre: "",
                Language: "",
                Price: ""
            }
        }
    },
    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async createBook() {
            try {
                await BookService.post(this.book)
                this.$router.push({
                    name: 'books',
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
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
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
}
</style>
