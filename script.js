const addcontainer = document.querySelector('#addContainer');
const closeBtn = document.querySelector('#closeBtn')
const addTodo = document.querySelector('#addTodo');

addTodo.addEventListener('click', function(){
    openContainer(addcontainer, closeBtn);
})

function openContainer(container, btn){
    if(window.getComputedStyle(container).display == 'none'){
        container.style.display = 'flex';
        btn.style.display = 'flex';
    }else{
        container.style.display = 'none';
        btn.style.display = 'none'; 
    }
}
closeBtn.addEventListener('click', function(){openContainer(addcontainer, this)})

const lista = document.querySelector('#list');
const addBtn = document.querySelector('#addBtn');

function createToDo(){
    const title = document.querySelector('#inputTitle'); 

    const li = document.createElement('li');

    li.innerHTML = 
    `
        <div class="todo_text">
            <p>${title.value}</p>
            <span>14/07/2024</span>
        </div>
        <div class="todo_config">
            <button>
                <i class="bi bi-pen"></i>
                Editar
            </button>
            <button>
                <i class="bi bi-x"></i>
                Deletar
            </button>
        </div>
    `;

    li.classList.add('todo');
    lista.appendChild(li);

    title.value = '';
}

addBtn.addEventListener('click', createToDo);