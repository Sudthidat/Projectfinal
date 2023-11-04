<template>
    <div class="background-image">
        <div class="container-fluid">
            <br>
            <div class="card">
                <div class="card-header">
                    <center>
                        <h1 class="card-title">แสดงข้อมูลหนังสือ ID : {{ book.id }} </h1>
                    </center>
                </div>
                <div class="card-body">
                    <p class="card-text">ชื่อหนังสือ : {{ book.Title }}</p>
                    <p class="card-text">ชื่อผู้แต่ง : {{ book.Author }}</p>
                    <p class="card-text">สำนักพิมพ์ : {{ book.Publisher }}</p>
                    <p class="card-text">ปีที่พิมพ์ : {{ book.PublicationYear }}</p>
                    <p class="card-text">หมวดหมู่ : {{ book.Genre }}</p>
                    <p class="card-text">ภาษา : {{ book.Language }}</p>
                    <p class="card-text">ราคา : {{ book.Price }} บาท</p>
                </div>
                <div class="card-footer">
                    <button v-on:click="navigateTo('/books')" class="btn btn-primary">ย้อนกลับ</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import BookService from '@/services/BookService';

export default {
    data() {
        return {
            book: null,
        };
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
    },
    created() {
        try {
            let bookId = this.$route.params.bookId;
            BookService.show(bookId).then((response) => {
                this.book = response.data;
                console.log(this.book);
            });
        } catch (error) {
            console.log(error);
        }
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
    margin-top: auto;
    height: 100%;
}

.card {
    width: 800px;
    margin: 0 auto;
}
.card-header {
    font-size: 20px;
}
.card-body {
    padding: 20px;
}
.card-footer {
    background-color: #eee;
    padding: 10px;
    border-radius: 0 0 5px 5px;
    float: right;
    text-align: right;
    width: 100%;
}
.card-text {
    font-size: 20px;
}
</style>
  