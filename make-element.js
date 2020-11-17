

export const makeElement = (name, source, inner,display ) =>{
    let el = document.createElement(name)
    el.src = source
    el.className = name
    el.innerHTML = inner
    el.style.display = display
    return el
    

}


export const doClose = function (btn) {
    btn.currentTarget.parentNode.remove()
}


    