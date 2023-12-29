/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  #arr = [];

  add(s)
  {
    this.#arr.push(s)
  }
  remove(i)
  {
    this.#arr.splice(i,1)
  }
  update(i, s)
  {
    if(i<this.#arr.length)
      this.#arr[i] = s
  }
  getAll()
  {
    return this.#arr
  }
  get(i)
  { 
      if(i>=this.#arr.length)
        return null
      return this.#arr[i]
  }
  clear()
  {
    this.#arr = []
  }
}

module.exports = Todo;


