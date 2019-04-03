const usernameInput = document.querySelector('input.username');
const menu = document.querySelector('.main-menu');
const btnRemove = document.querySelector('.btn-clear');

usernameInput.onkeyup = function(e)
{
    usernameInput.nextElementSibling.classList.add('d-none');
    const username = this.value.trim();
    if(e.keyCode === 13)
    {
        if(username === '') return;

        const el = [...menu.children].find(li => li.innerText === username);
        if(el !== undefined)
        {
            usernameInput.nextElementSibling.classList.remove('d-none');
            return;
        }

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between';
        listItem.innerText = username;

        const icon = document.createElement('i');
        icon.className = 'fas fa-trash mt-1';

        icon.onclick = function()
        {
            this.parentElement.remove();
        }
        usernameInput.value = '';

        listItem.appendChild(icon);
        menu.appendChild(listItem);
    }
    else if(e.keyCode === 27)
    {
        usernameInput.value = '';
    }
    else
    {
        const el = [...menu.children].find(li => li.innerText === username);
        if(el !== undefined)
        {
            usernameInput.nextElementSibling.classList.remove('d-none');
            return;
        }
    }
}
btnRemove.onclick = () => menu.innerHTML = '';

