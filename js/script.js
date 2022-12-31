const item = document.querySelector('.item')
const place = document.querySelectorAll('.placeholder')


// item.addEventListener
//

item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend', dragend)



for (const placeholder of place){
    placeholder.addEventListener("dragover", dragover)
    placeholder.addEventListener("dragenter", dragenter)
    placeholder.addEventListener("dragleave", dragleave)
    placeholder.addEventListener("drop", drop)
}

function dragstart(event){
    event.target.classList.add('hold')
    setTimeout(()=>event.target.classList.add('hide'),0)

}
function dragend(event){
    event.target.classList.remove('hold','hide')
}

function dragover(event){
    event.preventDefault()
}

function dragenter(event){
    event.target.classList.add('hoverd')
}

function dragleave(event){
    event.target.classList.remove('hoverd')
}
function drop(event){
    event.target.append(item)
    event.target.classList.remove('hoverd')
}
