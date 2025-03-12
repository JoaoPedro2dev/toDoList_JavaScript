const addcontainer = document.querySelector('#addContainer');
const closeBtn = document.querySelector('#closeBtn')
const addTodo = document.querySelector('#addTodo');
const lista = document.querySelector('#list');
const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#inputTitle'); 

addTodo.addEventListener('click', function(){
    openContainer(addcontainer, closeBtn);
})

addBtn.addEventListener('click', createToDo);

function openContainer(container, btn){
    if(window.getComputedStyle(container).display == 'none'){
        container.style.display = 'flex';
        btn.style.display = 'flex';
    }else{
        container.style.display = 'none';
        btn.style.display = 'none'; 
    }

    closeBtn.addEventListener('click', function(){openContainer(container, this)})
}

function createToDo(){
    const li = document.createElement('li');
    li.classList.add('todo');

    li.innerHTML = 
    `
        <div class="todo_text">
            <p>${title.value}</p>
            <span>14/07/2024</span>
        </div>
        <div class="todo_config">
            <button onclick="editarLi(this)">
                <i class="bi bi-pen"></i>
                Editar
            </button>
            <button onclick="deleteLi(this)">
                <i class="bi bi-x"></i>
                Deletar
            </button>
        </div>
    `;

    lista.appendChild(li);

    title.value = '';
    openContainer(addcontainer, closeBtn);
}

function deleteLi(elemento){
    const li = elemento.closest('li');
    lista.removeChild(li);
}

function editarLi(elemento){
    const editContainer = document.querySelector('#editContainer');
    const editBtn = document.querySelector('#editBtn');
    let newTitle = editContainer.querySelector('input'); 

    const li = elemento.closest('li');
    const liToDo = li.querySelector('.todo_text');
    let text = liToDo.querySelector('p');

    console.log(li);
    
    openContainer(editContainer, closeBtn);
    newTitle.value = text.textContent;

    editBtn.addEventListener('click', function(){ 
        text.textContent = newTitle.value;
        openContainer(editContainer, closeBtn)
    }, {once:true});
}