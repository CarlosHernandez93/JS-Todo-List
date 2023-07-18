export default class AddTodo{
    constructor(){
        this.btnAdd = document.getElementById('add')
        this.title = document.getElementById('title')
        this.description = document.getElementById('description')
    }

    onClick(callback){
        this.btnAdd.onclick = () =>{
            if(this.title.value === '' || this.description.value === ''){
                console.error("Error")
            }
            else{
                callback(this.title.value, this.description.value)
            }
        }
    }
}