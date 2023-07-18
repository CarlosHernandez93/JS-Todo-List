import AddTodo from "./components/addTodo.js";

export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table')
        this.addTodoForm = new AddTodo()

        this.addTodoForm.onClick((title, desciption) => this.addTodo(title, desciption))
    }

    setModel(model){
        this.model = model;
    }

    addTodo(title, description){
        const todo = this.model.addTodo(title, description)
        this.createRow(todo)
    }

    createRow(todo){
        const row = table.insertRow()
        row.setAttribute('id', todo.id )
        row.innerHTML = `
            <td>${todo.title}</td>
            <td>${todo.description}</td>
            <td class='text-center'></td>
            <td class='text-right'></td>
        `
        
        const checkbox = document.createElement("input")
        checkbox.type = 'checkbox'
        checkbox.checked = todo.completed
        checkbox.onclick = () => this.toggleCompleted(todo.id)
        row.children[2].appendChild(checkbox)

        const removeBtn = document.createElement('button')
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1')
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>'
        removeBtn.onclick = () => this.removeTodo(todo.id)
        row.children[3].appendChild(removeBtn)
    }

    toggleCompleted(id){
        this.model.toggleCompleted(id)
    }

    removeTodo(id){
        this.model.removeTodo(id)
        document.getElementById(id).remove()
    }
}