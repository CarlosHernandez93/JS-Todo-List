document.addEventListener('DOMContentLoaded', ()=>{
    const title = document.getElementById('title')
    const desciption = document.getElementById('description')
    const table = document.getElementById('table')
    const alert = document.getElementById('alert')
    const btnAdd = document.getElementById('add')
    let id = 1

    const removeTodo = (id) => {
        document.getElementById(id).remove()
    }

    const addTodo = () => {

        if(title.value === '' || desciption.value === ''){
            alert.classList.remove('d-none')
            alert.innerText = 'Title and Description are required'
            return
        }

        alert.classList.add('d-none')
        const row = table.insertRow()
        row.setAttribute('id', id++)
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${desciption.value}</td>
            <td class='text-center'>
                <input type='checkbox'>
            </td>
            <td class='text-right'></td>
        `
        const editBtn = document.createElement('button')
        editBtn.classList.add('btn', 'btn-primary', 'mb-1')
        editBtn.innerHTML = '<i class="fa fa-pencil"></i>'

        const removeBtn = document.createElement('button')
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1')
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>'

        row.children[3].appendChild(editBtn)
        row.children[3].appendChild(removeBtn)

        removeBtn.onclick = () => {
            removeTodo(row.getAttribute('id'))
        }

    }

    btnAdd.onclick = addTodo
})