import Alert from "./alert.js"

export default class Modal{
    constructor(){
        this.title = document.getElementById('modal-title')
        this.description = document.getElementById('modal-description')
        this.btnAdd = document.getElementById('modal-btn')
        this.completed = document.getElementById('modal-completed')
        this.todo = null
        this.alert = new Alert('modal-alert')
    }

    onClick(callback){
        this.btnAdd.onclick = () =>{
            if(!this.title.value || !this.description.value){
                this.alert.showMessage('Title and Description are required')
                return
            }
            $('#modal').modal('toggle')
            callback(this.todo.id, {
                title: this.title.value,
                description: this.description.value,
                completes: this.completed.checked
            })
        }
    }

    setValues(todo){
        this.title.value = todo.title
        this.description.value = todo.description
        this.completed.checked = todo.completed
        this.todo = todo
    }
}