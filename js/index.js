const input = document.getElementById('participante')
const boton = document.getElementById('agregarParticipante')
const lista = document.getElementById('listaParticipantes')
const msj = document.getElementById('msjError')

boton.addEventListener('click', ()=> {
    const text = input.value.trim()

    if(text === '') return msj.innerText = 'Complete este campo'
    else msj.innerText = ''
    const li = document.createElement('li')
    li.innerText = text

    input.value = ''

    const btnEliminar = document.createElement('button')
    btnEliminar.innerText = 'Eliminar'
    btnEliminar.style.marginLeft = '10px'
    
    btnEliminar.addEventListener('click', (e)=>{
        e.stopPropagation()
        lista.removeChild(li)
    })

    li.appendChild(btnEliminar)
    lista.appendChild(li)

    const btnPresente = document.createElement('button')
    btnPresente.innerText = 'Presente'
    btnPresente.style.marginLeft = '20px'

    btnPresente.addEventListener('click', ()=> {
        li.classList.toggle('presente')
    })

    li.appendChild(btnPresente)
    lista.appendChild(li)


})