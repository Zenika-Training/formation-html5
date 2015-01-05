
/********fonctions du local storage*******/

function save(evtId, value){
    if(window.localStorage){
        window.localStorage.setItem(evtId, value);
    }
}
/*
function getAll(){
    if(window.localStorage){
        for (var i=0; i<=window.localStorage.length-1; i++)
        {
            var key = window.localStorage.key(i);
            var value = localStorage.getItem(key);
            //...
        }
    }
} */

function deleteEvt(evtId){
    if(window.localStorage){
        window.localStorage.removeItem(evtId);

    }
}
/******************************************/
