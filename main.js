var app = new Vue({
  el: '#app',
  data: {
    newTodoItem: '',
    doneTodos: false,
    todos: [
      {text: "Play football", done: true},
      {text:"Read my book", done: false},
      {text: "Eat my meal", done: false},
      {text: "Take a nap", done: true}
     ],
     errors: []
  },
  methods: {
    addTodoItem() {
      this.errors = []
      if (!this.newTodoItem.trim() == '') {
        this.todos.push({
          text: this.newTodoItem,
          done: false
        })
        this.newTodoItem = ''
      }
      else {
        this.errors.push("Please fill this field")
      }
    },
    deleteItem(todo) {
      let index = this.todos.findIndex(t => t == todo)
      this.todos.splice(index, 1)
    }
  },
  computed: {
    undoneTodos() {
      return this.todos.filter(t => !t.done)
    },
    filterDoneAndUndone() {
      if (this.doneTodos) {
        return this.undoneTodos
      }
      else {return this.todos}
      //shortcut for this -> return this.doneTodos ? this.undoneTodos : this.todos
    }
  }
})