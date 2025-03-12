const addcontainer = document.querySelector('#addContainer');
const closeBtn = document.querySelector('#closeBtn')
const addTodo = document.querySelector('#addTodo');
const lista = document.querySelector('#list');
const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#inputTitle'); 
const erro1 = document.getElementsByClassName('erro')[0];
const erro2 = document.getElementsByClassName('erro')[1];

console.log(erro2)

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
    verificarErro(erro1, title);

    const li = document.createElement('li');
    li.classList.add('todo');

    if(!title.value){
        return;
    }

    const textoMaisuculo = title.value[0].toUpperCase()+title.value.slice(1);


    let data = new Date().toLocaleDateString();
    let hora = new Date().getHours();
    let minutos = new Date().getMinutes();

    li.innerHTML = 
    `
        <div class="todo_text">
            <p>${textoMaisuculo}</p>
            <span>${data} - ${hora}:${minutos}</span>
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
    
    openContainer(editContainer, closeBtn);
    newTitle.value = text.textContent;

    editBtn.addEventListener('click', function(){ 
        verificarErro(erro2, newTitle);

        if(!newTitle.value){
            return;
        }

        const newTextoMaiusculo = newTitle.value[0].toUpperCase()+newTitle.value.slice(1);
        text.textContent = newTextoMaiusculo;
        openContainer(editContainer, closeBtn)
    }, {once:true});
}

function verificarErro(erro, input){
    if(input.value.trim() === ''){
        erro.style.display = 'block';
        return;
    }else{
        erro.style.display = 'none';
    }
}