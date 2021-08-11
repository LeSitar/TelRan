const inputAction = document.querySelector('#todo'),
    btnAdd = document.querySelector('.btn-add'),
    list = document.querySelector('.list');

const listActions = [];
let iterator = 0;
btnAdd.onclick = () => {
    if (inputAction.value !== '') {
        listActions.push(createAction(iterator++, inputAction.value));
        list.innerHTML = '';
        for (let item of listActions) {
            list.innerHTML += `<li><input type="checkbox" id="${item.id}">${item.action}</li>`
            inputAction.value = ''
        }
    }
}

const createAction = (id, action) => {
    return {
        id,
        action,
        done: false
    }
}

list.onclick = (event) => {
    const value = parseInt(event.target.children[0].id);
    const check = event.target.children[0].checked;
    if (check === false) {      // у вас check и так boolean, зачем писать эту проверку? лучше - (!check)
        event.target.children[0].checked = true;
        listActions[value].done = true;
        event.target.style.textDecoration = 'line-through'
    } else {
        event.target.children[0].checked = false;
        listActions[value].done = false;
        event.target.style.textDecoration = 'none'
    }
    console.log(listActions)
}

//  checkbox лучше подписать на событие onchange и, когда оно происходит изменять значение done 
