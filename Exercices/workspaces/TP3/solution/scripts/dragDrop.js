/*******fonctions pour drag n drop********/

function drag(target, evt) {
    evt.dataTransfer.setData('Text', target.id);
}

function drop(target, evt) {
    var id = evt.dataTransfer.getData('Text');
    var eventEl = document.getElementById(id);
    target.appendChild(eventEl);
    var content = eventEl.innerHTML;
    var categorie = eventEl.getAttribute('data-category');
    evt.preventDefault();
}

function cancel(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    return false;
}

/*****************************************/
