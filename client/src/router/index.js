import Vue from 'vue'
import Router from 'vue-router'
import BookIndex from '@/components/Book/Index'
import BookCreate from '@/components/Book/CreateBook'
import BookEdit from '@/components/Book/EditBook'
import BookShow from '@/components/Book/ShowBook'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/books',
      name: 'books',
      component: BookIndex
    },
    {
      path: '/book/create',
      name: 'book-create',
      component: BookCreate
    },
    {
      path: '/book/edit/:bookId',
      name: 'book-edit',
      component: BookEdit
    },
    {
      path: '/book/:bookId',
      name: 'book-show',
      component: BookShow
    }
  ]
})
