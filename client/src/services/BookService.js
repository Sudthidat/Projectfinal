import Api from '@/services/Api'

export default {
    index(search) {
        return Api().get('books')
    },
    show(bookId) {
        return Api().get('book/' + bookId)
    },
    post(book) {
        return Api().post('book', book)
    },
    put(book) {
        return Api().put('book/' + book.id, book)
    },
    delete(book) {
        return Api().delete('book/' + book.id, book)
    },
}