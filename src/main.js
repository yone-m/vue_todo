import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    current: -1,
    options:[
      { value: -1,label: 'すべて' },
      { value: 0,label: '作業中' },
      { value: 1,label: '完了' }
    ]
  },
  methods:{
  }
})

var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo,index){
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
