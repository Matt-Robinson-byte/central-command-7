

export const makeElement = (tag,name, inner,display ) =>{
    let el = document.createElement(tag)
    el.className = name
    el.innerHTML = inner
    el.style.display = display
    return el

}


export const doClose = function (btn) {
    btn.currentTarget.parentNode.remove()
}


    