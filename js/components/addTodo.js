import Alert from "./alert.js"

export default class AddTodo{
    constructor(){
        this.btnAdd = document.getElementById('add')
        this.title = document.getElementById('title')
        this.description = document.getElementById('description')
        this.alert = new Alert('alert')
    }

    onClick(callback){
        this.btnAdd.onclick = () =>{
            if(this.title.value === '' || this.description.value === ''){
                this.alert.showMessage('Title and Description are required')
            }
            else{
                callback(this.title.value, this.description.value)
            }
        }
    }
}